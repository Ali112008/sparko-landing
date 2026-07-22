#!/usr/bin/env python3
"""Start Next.js server + Playwright screenshot in one script"""
import asyncio
import subprocess
import time
import os
from playwright.async_api import async_playwright

OUTPUT = '/home/z/my-project/download/joboffer-section.png'

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        try:
            await page.goto('http://localhost:3000', timeout=30000, wait_until='networkidle')
            await page.wait_for_timeout(5000)
            
            # Find the JobOfferSection by looking for "عرض وظيفي" text
            loc = page.locator('text=عرض وظيفي')
            count = await loc.count()
            print(f"Found {count} 'عرض وظيفي' elements")
            
            if count > 0:
                # Get the parent section element
                element = await loc.first.evaluate_handle('el => el.closest("section")')
                el = element.as_element()
                
                if el:
                    await el.scroll_into_view_if_needed()
                    await page.wait_for_timeout(1000)
                    await el.screenshot(path=OUTPUT)
                    print(f"Screenshot saved to {OUTPUT}")
                else:
                    print("No parent section found, taking full page")
                    await page.screenshot(path='/home/z/my-project/download/joboffer-full-page.png', full_page=True)
            else:
                print("No 'عرض وظيفي' text found, taking full page")
                await page.screenshot(path='/home/z/my-project/download/joboffer-full-page.png', full_page=True)
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

# Start Next.js dev server in background
print("Starting Next.js dev server...")
env = os.environ.copy()
env['NODE_OPTIONS'] = '--max-old-space-size=256'
proc = subprocess.Popen(
    ['npm', 'run', 'dev'],
    cwd='/home/z/my-project',
    env=env,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT
)

# Wait for server to be ready
print("Waiting for server...")
for i in range(30):
    time.sleep(2)
    try:
        import urllib.request
        urllib.request.urlopen('http://localhost:3000', timeout=5)
        print("Server is ready!")
        break
    except:
        if i % 5 == 0:
            print(f"Still waiting... ({i*2}s)")
        continue

# Extra wait for compilation
time.sleep(5)

# Run Playwright
asyncio.run(capture())

# Kill server
proc.terminate()
print("Server stopped")
