import asyncio
import subprocess
import time
import os
import signal
import sys

async def capture_stats():
    from playwright.async_api import async_playwright
    
    # Start Python HTTP server to serve the Next.js build output
    server_dir = '/home/z/my-project'
    server_process = subprocess.Popen(
        ['python', '-m', 'http.server', '8765', '--directory', server_dir],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to be ready
    for i in range(10):
        try:
            import urllib.request
            urllib.request.urlopen('http://localhost:8765/_next/static/css/')
            break
        except:
            time.sleep(0.5)
    
    print("HTTP server ready")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        # Navigate using the Python HTTP server which serves the Next.js output directory
        # But we need to serve the HTML page that references _next assets properly
        # The _next directory is in /home/z/my-project/.next/ but the HTML references /_next/
        # Python http.server will serve files from the root directory
        
        # We need to make _next accessible at /_next/ path
        # The actual static files are at /home/z/my-project/.next/static/
        # The HTML references /_next/static/...
        
        # Let's create a symlink or just use a different approach
        # Actually, the .next directory structure has the files we need
        
        await page.goto('http://localhost:8765/.next/server/app/index.html', wait_until='networkidle', timeout=30000)
        
        # Hmm this won't work well. Let me try the actual Next.js server approach differently
        await browser.close()
    
    # Kill HTTP server
    server_process.terminate()
    server_process.wait()

asyncio.run(capture_stats())
