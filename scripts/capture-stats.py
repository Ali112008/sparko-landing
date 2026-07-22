import asyncio
from playwright.async_api import async_playwright
import os

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 900})

        try:
            print('Navigating to page...')
            await page.goto('http://127.0.0.1:3000', wait_until='domcontentloaded', timeout=30000)
            
            print('Waiting for content...')
            await page.wait_for_selector('img[alt="Sparko Trophy"]', timeout=20000)
            
            print('Found trophy, taking screenshots...')
            
            # Take a full viewport screenshot first
            await page.screenshot(path='/home/z/my-project/download/stats-full-viewport.png', full_page=False)
            print('Full viewport screenshot saved!')
            
            # Scroll to find the stats section
            # Find the bounding box of the trophy section
            trophy_box = await page.evaluate('''() => {
                const trophy = document.querySelector('img[alt="Sparko Trophy"]');
                if (!trophy) return null;
                let parent = trophy.parentElement;
                while (parent && parent.tagName !== 'SECTION') {
                    parent = parent.parentElement;
                }
                if (!parent) return null;
                const rect = parent.getBoundingClientRect();
                return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, top: rect.top };
            }''')
            
            print(f'Section box: {trophy_box}')
            
            if trophy_box:
                # Scroll to the section
                await page.evaluate(f'window.scrollTo(0, {trophy_box["top"] - 100})')
                await asyncio.sleep(0.5)
                
                # Clip screenshot to just the section area
                await page.screenshot(
                    path='/home/z/my-project/download/stats-section-current.png',
                    clip={
                        'x': trophy_box['x'],
                        'y': trophy_box['y'],
                        'width': trophy_box['width'],
                        'height': trophy_box['height']
                    }
                )
                print('StatsSection clipped screenshot saved!')

        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()

        await browser.close()
        print('Done')

asyncio.run(capture())
