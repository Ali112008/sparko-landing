import asyncio
from playwright.async_api import async_playwright

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        try:
            await page.goto('http://localhost:3000', timeout=15000, wait_until='networkidle')
            await page.wait_for_timeout(2000)
            
            # Find the JobOfferSection by looking for "عرض وظيفي" text
            section = await page.locator('text=عرض وظيفي').first
            # Get the parent section element
            parent = await section.evaluate_handle('el => el.closest("section")')
            element = parent.as_element()
            
            if element:
                # Scroll into view
                await element.scroll_into_view_if_needed()
                await page.wait_for_timeout(500)
                
                # Take screenshot of just this element
                await element.screenshot(path='/home/z/my-project/download/joboffer-section.png')
                print("Screenshot saved to /home/z/my-project/download/joboffer-section.png")
            else:
                print("Could not find section element")
                # Take full page screenshot as fallback
                await page.screenshot(path='/home/z/my-project/download/joboffer-full-page.png', full_page=True)
                print("Full page screenshot saved")
        except Exception as e:
            print(f"Error: {e}")
        
        await browser.close()

asyncio.run(capture())
