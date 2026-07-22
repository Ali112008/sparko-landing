import asyncio
import subprocess
import time

async def capture_stats():
    from playwright.async_api import async_playwright
    
    # Start lightweight Python HTTP server from project root
    server_process = subprocess.Popen(
        ['python', '-m', 'http.server', '8765', '--directory', '/home/z/my-project'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    for i in range(10):
        try:
            import urllib.request
            resp = urllib.request.urlopen('http://localhost:8765/')
            if resp.status == 200:
                break
        except:
            time.sleep(0.5)
    
    print("HTTP server ready")
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        await page.goto('http://localhost:8765/tmp-page.html', wait_until='networkidle', timeout=30000)
        await page.wait_for_timeout(3000)
        
        # Find the StatsSection
        sections = await page.query_selector_all('section')
        stats_section = None
        for section in sections:
            text = await section.inner_text()
            if 'منذ 2015' in text and ('نتائج' in text or 'تقييم' in text):
                stats_section = section
                break
        
        if stats_section:
            # Scroll to the StatsSection
            await stats_section.scroll_into_view_if_needed()
            await page.wait_for_timeout(1000)
            
            # Take screenshot of just the StatsSection element
            await stats_section.screenshot(path='/home/z/my-project/download/stats-section-centered.png')
            print("StatsSection screenshot saved!")
        else:
            print("StatsSection not found!")
        
        await browser.close()
    
    server_process.terminate()
    server_process.wait(timeout=5)

asyncio.run(capture_stats())
