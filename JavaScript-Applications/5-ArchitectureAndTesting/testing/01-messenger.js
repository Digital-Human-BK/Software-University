const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

describe('Test 01.Messenger functionality', async function () {
  this.timeout(10000);

  before(async () => browser = await chromium.launch({ headless: false, slowMo: 1000 }));
  after(async () => await browser.close());
  beforeEach(async () => page = await browser.newPage());
  afterEach(async () => await page.close());

  it('Should load and display messages when >Refresh< button clicked', async () => {
    await page.goto('http://localhost:5500');
    await page.click('#refresh');

    const content = await page.$eval('#messages', m => m.value);

    expect(content).to.contains('Spami: Hello, are you there?');
    expect(content).to.contains('Garry: Yep, whats up :?');
    expect(content).to.contains('Spami: How are you? Long time no see? :)');
    expect(content).to.contains('George: Hello, guys! :))');
    expect(content).to.contains('Spami: Hello, George nice to see you! :)))');

  });

  it('Should send message', async () => {
    await page.goto('http://localhost:5500');
    await page.waitForSelector('#controls');

    await page.fill('#author', 'TEST Author');
    await page.fill('#content', 'TEST Message');

    const [request] = await Promise.all([
      page.waitForRequest(request => request.method() == 'POST'),
      page.click('#submit')
    ]);

    const data = JSON.parse(request.postData());
    expect(data.author).to.equal('TEST Author');
    expect(data.content).to.equal('TEST Message');

    await page.click('#refresh');
    const content = await page.$eval('#messages', m => m.value);

    expect(content).to.contains('Spami: Hello, are you there?');
    expect(content).to.contains('Garry: Yep, whats up :?');
    expect(content).to.contains('Spami: How are you? Long time no see? :)');
    expect(content).to.contains('George: Hello, guys! :))');
    expect(content).to.contains('Spami: Hello, George nice to see you! :)))');
    expect(content).to.contains('TEST Author: TEST Message');
  });
});