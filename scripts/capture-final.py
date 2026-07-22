import asyncio
from playwright.async_api import async_playwright
import subprocess

async def capture():
    server = subprocess.Popen(
        ['python3', '-m', 'http.server', '8090', '--directory', '/home/z/my-project/download'],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )
    await asyncio.sleep(1.5)
    
    import urllib.request
    try:
        resp = urllib.request.urlopen('http://localhost:8090/final-page.html', timeout=5)
        print(f'Server running! Status: {resp.status}')
    except Exception as e:
        print(f'Server error: {e}')
        server.kill()
        return
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process', '--js-flags=--max-old-space-size=256']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 900})
        
        try:
            await page.goto('http://localhost:8090/final-page.html', wait_until='load', timeout=30000)
            await asyncio.sleep(5)
            
            box = await page.evaluate('''() => {
                const trophy = document.querySelector('img[alt="Sparko Trophy"]');
                if (!trophy) return null;
                let parent = trophy.parentElement;
                while (parent && parent.tagName !== 'SECTION') parent = parent.parentElement;
                if (!parent) return null;
                const rect = parent.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, top: rect.top, scrollTop: window.scrollY };
            }''')
            
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
                
                await page.screenshot(
                    path='/home/z/my-project/download/stats-section-final.png',
                    clip={
                        'x': max(0, new_box['x'] - 20),
                        'y': max(0, new_box['y'] - 10),
                        'width': min(1440, new_box['width'] + 40),
                        'height': min(900, new_box['height'] + 40)
                    }
                )
                print('Final StatsSection screenshot saved!')
            
        except Exception as err:
            print(f'Error: {err}')
        
        await browser.close()
    
    server.kill()
    print('Done')

asyncio.run(capture())
