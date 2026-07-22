import asyncio
from playwright.async_api import async_playwright

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process']
        )
        page = await browser.new_page()
        await page.set_viewport_size({"width": 1440, "height": 400})

        try:
            print('Navigating to standalone page...')
            await page.goto('http://localhost:8090/stats-standalone.html', wait_until='networkidle', timeout=30000)
            
            print('Page loaded, taking screenshot...')
            await asyncio.sleep(2)  # Wait for fonts and Tailwind to load
            
            await page.screenshot(path='/home/z/my-project/download/stats-section-current.png', full_page=True)
            print('StatsSection screenshot saved!')

        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()

        await browser.close()
        print('Done')

asyncio.run(capture())
