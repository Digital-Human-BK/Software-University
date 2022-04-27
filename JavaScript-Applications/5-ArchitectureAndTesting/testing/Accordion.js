const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('E2E tests', async function () {
  this.timeout(5000);

  before(async () => browser = await chromium.launch());
  after(async () => await browser.close());
  beforeEach(async () => page = await browser.newPage());
  afterEach(async () => await page.close());

  it('initial load', async () => {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('.accordion');
    const content = await page.textContent('#main');
    // await page.screenshot({ path: 'page.png' });
    expect(content).to.contains('Scalable Vector Graphics');
    expect(content).to.contains('Open standard');
    expect(content).to.contains('Unix');
    expect(content).to.contains('ALGOL');
  });

  it('more btn works', async ()=> {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('.accordion');
    await page.click('text="More"');

    await page.waitForResponse(/articles\/details/i);

    // await page.waitForSelector('.accordion p');
    const visible = await page.isVisible('.accordion p');

    expect(visible).to.be.true;
  });

  it('less btn works', async ()=> {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('.accordion');
    await page.click('text="More"');

    await page.waitForResponse(/articles\/details/i);
    await page.waitForSelector('.accordion p', {state: 'visible'});
    await page.click('text="Less"');

    const visible = await page.isVisible('.accordion p');

    expect(visible).to.be.false;
  });
});