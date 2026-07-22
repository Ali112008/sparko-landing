#!/usr/bin/env python3
"""Combined HTTP server + Playwright screenshot capture"""
import asyncio
import threading
import http.server
import functools
import os
import time
from playwright.async_api import async_playwright

SERVE_DIR = '/home/z/my-project/serve-dir'
OUTPUT = '/home/z/my-project/download/joboffer-section.png'

def start_server():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=SERVE_DIR)
    server = http.server.HTTPServer(('127.0.0.1', 8080), handler)
    server.serve_forever()

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        try:
            await page.goto('http://127.0.0.1:8080', timeout=15000, wait_until='networkidle')
            await page.wait_for_timeout(3000)
            
            # Find the JobOfferSection by looking for "عرض وظيفي" text
            section = await page.locator('text=عرض وظيفي').first
            parent = await section.evaluate_handle('el => el.closest("section")')
            element = parent.as_element()
            
            if element:
                await element.scroll_into_view_if_needed()
                await page.wait_for_timeout(500)
                await element.screenshot(path=OUTPUT)
                print(f"Screenshot saved to {OUTPUT}")
            else:
                print("Could not find section, taking full page")
                await page.screenshot(path='/home/z/my-project/download/joboffer-full-page.png', full_page=True)
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

# Start server in background thread
server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(2)

# Verify server is running
import urllib.request
try:
    urllib.request.urlopen('http://127.0.0.1:8080')
    print("Server is running!")
except Exception as e:
    print(f"Server check failed: {e}")
    # Try starting on different port
    pass

# Run Playwright
asyncio.run(capture())
