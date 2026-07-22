import asyncio
from playwright.async_api import async_playwright

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-ggpu', '--single-process']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 900})

        try:
            print('Opening full page...')
            await page.goto('http://localhost:8090/page-standalone.html', wait_until='networkidle', timeout=30000)
            
            print('Page loaded, waiting...')
            await asyncio.sleep(3)
            
            # Find the StatsSection and get its bounding box
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
                # Scroll to the section
                scroll_y = section_box['top'] - 50 + section_box['scrollTop']
                await page.evaluate(f'window.scrollTo(0, {scroll_y})')
                await asyncio.sleep(1)
                
                # Get the new box after scroll
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
                
                print(f'New section box: {new_box}')
                
                # Clip screenshot to just the section
                await page.screenshot(
                    path='/home/z/my-project/download/stats-section-current.png',
                    clip={
                        'x': max(0, new_box['x'] - 20),
                        'y': max(0, new_box['y'] - 20),
                        'width': min(1440, new_box['width'] + 40),
                        'height': min(900, new_box['height'] + 40)
                    }
                )
                print('StatsSection clipped screenshot saved!')
                
                # Also take a full viewport screenshot for reference
                await page.screenshot(path='/home/z/my-project/download/full-page-ref.png', full_page=False)
                print('Full page reference screenshot saved!')

        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()

        await browser.close()
        print('Done')

asyncio.run(capture())
