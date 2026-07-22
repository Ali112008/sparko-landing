import asyncio
import threading
import http.server
import functools
import time
from playwright.async_api import async_playwright

SERVE_DIR = '/home/z/my-project/prod-serve'
OUTPUT = '/home/z/my-project/download/joboffer-section.png'

def start_server():
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=SERVE_DIR)
    server = http.server.HTTPServer(('127.0.0.1', 8081), handler)
    print("HTTP server started on port 8081")
    server.serve_forever()

# Start server thread
server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
time.sleep(2)

# Verify
import urllib.request
try:
    resp = urllib.request.urlopen('http://127.0.0.1:8081')
    print(f"Server OK: {resp.status}")
except Exception as e:
    print(f"Server error: {e}")

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        try:
            await page.goto('http://127.0.0.1:8081', timeout=30000, wait_until='load')
            await page.wait_for_timeout(5000)
            
            # Find sections
            sections = await page.locator('section').all()
            print(f"Found {len(sections)} sections")
            
            if len(sections) >= 7:
                section = sections[6]
                await section.scroll_into_view_if_needed()
                await page.wait_for_timeout(1000)
                await section.screenshot(path=OUTPUT)
                print(f"Screenshot saved to {OUTPUT}")
            else:
                print(f"Only {len(sections)} sections")
                await page.screenshot(path='/home/z/my-project/download/joboffer-full-page.png', full_page=True)
                print("Full page screenshot saved")
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

asyncio.run(capture())
