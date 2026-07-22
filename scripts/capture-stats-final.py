import asyncio
from playwright.async_api import async_playwright

async def capture_stats():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            args=['--single-process', '--js-flags=--max-old-space-size=256', '--no-sandbox', '--disable-gpu']
        )
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        
        # Navigate to the Next.js page
        await page.goto('http://localhost:3099/', wait_until='networkidle', timeout=60000)
        await page.wait_for_timeout(3000)
        
        # Find the StatsSection - scroll to it
        sections = await page.query_selector_all('section')
        stats_section = None
        for section in sections:
            text = await section.inner_text()
            if 'منذ 2015' in text and ('نتائج' in text or 'تقييم' in text):
                stats_section = section
                break
        
        if stats_section:
            await stats_section.scroll_into_view_if_needed()
            await page.wait_for_timeout(1500)
            await stats_section.screenshot(path='/home/z/my-project/download/stats-section-centered.png')
            print("StatsSection screenshot saved!")
            
            # Also get bounding box for reference
            box = await stats_section.bounding_box()
            print(f"StatsSection bounds: {box}")
        else:
            print("StatsSection not found!")
            await page.screenshot(path='/home/z/my-project/download/stats-full-page.png', full_page=True)
        
        await browser.close()

asyncio.run(capture_stats())
