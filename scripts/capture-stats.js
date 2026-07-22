const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--single-process', '--disable-extensions'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for the StatsSection to render
    await page.waitForSelector('img[alt="Sparko Trophy"]', { timeout: 15000 });

    // Find the section containing the trophy
    const section = await page.evaluateHandle(() => {
      const trophy = document.querySelector('img[alt="Sparko Trophy"]');
      if (!trophy) return null;
      let parent = trophy.parentElement;
      while (parent && parent.tagName !== 'SECTION') {
        parent = parent.parentElement;
      }
      return parent;
    });

    if (section && section.asElement()) {
      await section.asElement().screenshot({ path: '/home/z/my-project/download/stats-section-current.png', type: 'png' });
      console.log('StatsSection screenshot saved!');
    }

    // Also take a wider screenshot showing the full section area
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight * 0.4); // scroll to middle of page
    });
    await new Promise(r => setTimeout(r, 500));

    // Full viewport screenshot
    await page.screenshot({ path: '/home/z/my-project/download/full-page-current.png', type: 'png', fullPage: false });
    console.log('Full page screenshot saved!');

  } catch (err) {
    console.error('Error:', err.message);
  }

  await browser.close();
  console.log('Done');
})();
