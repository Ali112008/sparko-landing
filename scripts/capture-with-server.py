import asyncio
from playwright.async_api import async_playwright
import subprocess
import time

async def capture():
    # Start the HTTP server BEFORE launching the browser
    server_process = subprocess.Popen(
        ['python3', '-m', 'http.server', '8090', '--directory', '/home/z/my-project/download'],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # Wait for server to start
    await asyncio.sleep(2)
    
    # Verify server is running
    import urllib.request
    try:
        response = urllib.request.urlopen('http://localhost:8090/page-standalone.html', timeout=5)
        print(f'Server running! Response code: {response.status}')
    except Exception as e:
        print(f'Server check failed: {e}')
        server_process.kill()
        return
    
    # Now launch the browser
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process', '--js-flags=--max-old-space-size=512']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 900})
        
        try:
            print('Opening page...')
            await page.goto('http://localhost:8090/page-standalone.html', wait_until='load', timeout=30000)
            
            print('Page loaded, waiting for styles...')
            await asyncio.sleep(5)  # Extra wait for CSS
            
            # Find StatsSection
            section_box = await page.evaluate('''() => {
                const trophy = document.querySelector('img[alt="Sparko Trophy"]');
                if (!trophy) return null;
                let parent = trophy.parentElement;
                while (parent && parent.tagName !== 'SECTION') {
                    parent = parent.parentElement;
                }
                if (!parent) return null;
                const rect = parent.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, top: rect.top, scrollTop: window.scrollY };
            }''')
            
            print(f'Section box: {section_box}')
            
            if section_box:
                scroll_y = section_box['top'] - 100 + section_box['scrollTop']
                await page.evaluate(f'window.scrollTo(0, {scroll_y})')
                await asyncio.sleep(1)
                
                # Get new box
                new_box = await page.evaluate('''() => {
                    const trophy = document.querySelector('img[alt="Sparko Trophy"]');
                    if (!trophy) return null;
                    let parent = trophy.parentElement;
                    while (parent && parent.tagName !== 'SECTION') {
                        parent = parent.parentElement;
                    }
                    if (!parent) return null;
                    return parent.getBoundingClientRect();
                }''')
                
                print(f'New box: {new_box}')
                
                # Take clipped screenshot
                await page.screenshot(
                    path='/home/z/my-project/download/stats-section-current.png',
                    clip={
                        'x': max(0, new_box['x'] - 20),
                        'y': max(0, new_box['y'] - 10),
                        'width': min(1440, new_box['width'] + 40),
                        'height': min(900, new_box['height'] + 40)
                    }
                )
                print('StatsSection screenshot saved!')
            
            # Full viewport screenshot
            await page.screenshot(path='/home/z/my-project/download/full-page-ref.png', full_page=False)
            print('Full page screenshot saved!')
            
        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()
        
        await browser.close()
        print('Browser closed')
    
    # Kill the server
    server_process.kill()
    print('Server killed')

asyncio.run(capture())
