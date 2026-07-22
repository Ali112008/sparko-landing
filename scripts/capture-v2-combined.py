import asyncio
from playwright.async_api import async_playwright
import subprocess
import os
import time

async def capture():
    # Start the HTTP server as a subprocess
    server = subprocess.Popen(
        ['python3', '-m', 'http.server', '8090', '--directory', '/home/z/my-project/download'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to start
    await asyncio.sleep(1.5)
    
    # Verify server
    import urllib.request
    try:
        resp = urllib.request.urlopen('http://localhost:8090/stats-page-v2.html', timeout=5)
        print(f'Server running! Status: {resp.status}')
    except Exception as e:
        print(f'Server not running: {e}')
        server.kill()
        return
    
    # Now launch browser
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process', '--js-flags=--max-old-space-size=256']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 900})
        
        try:
            print('Navigating...')
            await page.goto('http://localhost:8090/stats-page-v2.html', wait_until='load', timeout=30000)
            
            print('Loaded, waiting for CSS...')
            await asyncio.sleep(5)
            
            # Find StatsSection
            box = await page.evaluate('''() => {
                const trophy = document.querySelector('img[alt="Sparko Trophy"]');
                if (!trophy) return null;
                let parent = trophy.parentElement;
                while (parent && parent.tagName !== 'SECTION') parent = parent.parentElement;
                if (!parent) return null;
                const rect = parent.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, top: rect.top, scrollTop: window.scrollY };
            }''')
            
            print(f'Box: {box}')
            
            if box:
                scroll_y = box['top'] - 50 + box['scrollTop']
                await page.evaluate(f'window.scrollTo(0, {scroll_y})')
                await asyncio.sleep(1)
                
                new_box = await page.evaluate('''() => {
                    const t = document.querySelector('img[alt="Sparko Trophy"]');
                    let p = t.parentElement;
                    while (p && p.tagName !== 'SECTION') p = p.parentElement;
                    return p ? p.getBoundingClientRect() : null;
                }''')
                
                print(f'New box: {new_box}')
                
                await page.screenshot(
                    path='/home/z/my-project/download/stats-section-v2.png',
                    clip={
                        'x': max(0, new_box['x'] - 20),
                        'y': max(0, new_box['y'] - 10),
                        'width': min(1440, new_box['width'] + 40),
                        'height': min(900, new_box['height'] + 40)
                    }
                )
                print('StatsSection v2 screenshot saved!')
            
            await page.screenshot(path='/home/z/my-project/download/full-page-v2.png', full_page=False)
            print('Full page saved!')
            
        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()
        
        await browser.close()
        print('Browser closed')
    
    server.kill()
    print('Server killed')

asyncio.run(capture())
