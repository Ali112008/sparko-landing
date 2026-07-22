#!/usr/bin/env python3
"""Start Next.js server + Playwright screenshot - use section index"""
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
            
            # JobOfferSection is the 7th section in the page (after Hero, Testimonials, Watch, Problems, Quote, Stats)
            sections = await page.locator('section').all()
            print(f"Found {len(sections)} sections")
            
            if len(sections) >= 7:
                # 7th section (index 6) is JobOfferSection
                section = sections[6]
                await section.scroll_into_view_if_needed()
                await page.wait_for_timeout(1000)
                await section.screenshot(path=OUTPUT)
                print(f"Screenshot saved to {OUTPUT}")
            else:
                print(f"Only {len(sections)} sections found, taking full page")
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

# Extra wait for compilation + rendering
time.sleep(8)

# Run Playwright
asyncio.run(capture())

# Kill server
proc.terminate()
print("Server stopped")
