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
    
    # Wait for server
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
        
        # Take full page screenshot first
        await page.screenshot(path='/home/z/my-project/download/stats-full-page.png', full_page=True)
        print("Full page screenshot saved")
        
        # Find all sections and their content
        sections = await page.query_selector_all('section')
        print(f"Found {len(sections)} sections")
        
        for i, section in enumerate(sections):
            text = await section.inner_text()
            box = await section.bounding_box()
            print(f"Section {i}: text='{text[:80]}...' box={box}")
        
        # Find the StatsSection specifically - it should have "منذ 2015" and trophy/stat icons
        stats_section = None
        for section in sections:
            text = await section.inner_text()
            if 'منذ 2015' in text or '2015' in text:
                # Verify it also contains stat text
                if 'نتائج' in text or 'تقييم' in text:
                    stats_section = section
                    break
        
        if stats_section:
            box = await stats_section.bounding_box()
            print(f"StatsSection found! Bounds: {box}")
            padding = 10
            await page.screenshot(
                path='/home/z/my-project/download/stats-section-centered.png',
                clip={
                    'x': max(0, box['x'] - padding),
                    'y': max(0, box['y'] - padding),
                    'width': box['width'] + 2 * padding,
                    'height': box['height'] + 2 * padding,
                }
            )
            print("StatsSection screenshot saved!")
        else:
            print("StatsSection not found, checking all sections...")
        
        await browser.close()
    
    server_process.terminate()
    server_process.wait(timeout=5)

asyncio.run(capture_stats())
