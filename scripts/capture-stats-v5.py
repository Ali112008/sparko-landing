import asyncio
import subprocess
import time
import sys
import os
import signal

async def capture_stats():
    from playwright.async_api import async_playwright
    
    # Start lightweight Python HTTP server from project root
    # The symlink _next -> .next makes /_next/ paths resolve correctly
    server_process = subprocess.Popen(
        ['python', '-m', 'http.server', '8765', '--directory', '/home/z/my-project'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to be ready
    for i in range(10):
        try:
            import urllib.request
            resp = urllib.request.urlopen('http://localhost:8765/')
            if resp.status == 200:
                break
        except:
            time.sleep(0.5)
    
    print("HTTP server ready on port 8765")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        # Load the cached HTML from /tmp which has all the page content
        # But we need to modify it to reference local _next paths
        # Actually, the HTML already references /_next/ paths, and our symlink makes them work
        
        # First, we need to get the HTML file. Let me write it as a local file.
        # The HTML we fetched earlier from Next.js has all the right paths
        # We need to copy it to a place where Python HTTP server can serve it
        
        await page.goto('http://localhost:8765/tmp-page.html', wait_until='networkidle', timeout=30000)
        
        # Wait for fonts and images to load
        await page.wait_for_timeout(3000)
        
        # Find the StatsSection
        stats_sections = await page.query_selector_all('section')
        print(f"Found {len(stats_sections)} sections")
        
        # Take screenshot of the last section (StatsSection is near bottom)
        if stats_sections:
            # Try to identify StatsSection by content
            for i, section in enumerate(stats_sections):
                text = await section.inner_text()
                if '2015' in text or 'نتائج' in text:
                    box = await section.bounding_box()
                    if box:
                        padding = 20
                        await page.screenshot(
                            path='/home/z/my-project/download/stats-section-centered.png',
                            clip={
                                'x': max(0, box['x'] - padding),
                                'y': max(0, box['y'] - padding),
                                'width': box['width'] + 2 * padding,
                                'height': box['height'] + 2 * padding,
                            }
                        )
                        print(f"Screenshot saved! StatsSection bounds: {box}")
                    break
        else:
            print("No sections found, taking full page screenshot")
            await page.screenshot(path='/home/z/my-project/download/stats-section-centered.png', full_page=True)
        
        await browser.close()
    
    # Kill HTTP server
    server_process.terminate()
    server_process.wait(timeout=5)
    print("Done!")

asyncio.run(capture_stats())
