import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        await page.goto('http://localhost:3099/', wait_until='networkidle', timeout=30000)
        
        # Wait for StatsSection to be fully rendered
        stats_section = await page.wait_for_selector('section', timeout=15000)
        await page.wait_for_timeout(2000)
        
        # Get the StatsSection bounding box
        box = await stats_section.bounding_box()
        if box:
            # Add some padding around the section
            padding = 10
            await page.screenshot(
                path='/home/z/my-project/download/stats-section-centered.png',
                clip={
                    'x': box['x'] - padding,
                    'y': box['y'] - padding,
                    'width': box['width'] + 2 * padding,
                    'height': box['height'] + 2 * padding,
                }
            )
            print(f"Screenshot saved! Section bounds: {box}")
        else:
            print("Could not find section bounding box")
            await page.screenshot(path='/home/z/my-project/download/stats-section-centered.png', full_page=True)
        
        await browser.close()

asyncio.run(main())
