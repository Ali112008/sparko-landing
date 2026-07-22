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
            # Use file:// protocol to open local HTML directly - no server needed
            file_path = '/home/z/my-project/download/stats-standalone.html'
            print(f'Opening local file: {file_path}')
            await page.goto(f'file://{file_path}', wait_until='networkidle', timeout=30000)
            
            print('Page loaded, waiting for Tailwind...')
            await asyncio.sleep(3)  # Wait for Tailwind CDN to load
            
            await page.screenshot(path='/home/z/my-project/download/stats-section-current.png', full_page=True)
            print('StatsSection screenshot saved!')

        except Exception as err:
            print(f'Error: {err}')
            import traceback
            traceback.print_exc()

        await browser.close()
        print('Done')

asyncio.run(capture())
