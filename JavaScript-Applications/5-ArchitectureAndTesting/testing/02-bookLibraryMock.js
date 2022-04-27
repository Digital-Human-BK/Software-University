const { chromium, request } = require('playwright-chromium');
const { expect } = require('chai');

//тестовете са нагласени да работят с чучело,и няма значение дали REST сървърът е включен

const mockData = {
  "d953e5fb-a585-4d6b-92d3-ee90697398a0":
  {
    "author": "J.K.Rowling", "title": "Harry Potter and the Philosopher's Stone"
  },
  "d953e5fb-a585-4d6b-92d3-ee90697398a1":
  {
    "author": "Svetlin Nakov", "title": "C# Fundamentals"
  }
};

function json(data) {
  return {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

const url = 'http://localhost:5500';

describe('Test Book Library', async function () {
  this.timeout(15000);

  let browser, page;

  before(async () => browser = await chromium.launch({ headless: false, slowMo: 1000}));
  after(async () => await browser.close());

  beforeEach(async () => page = await browser.newPage());
  afterEach(async () => await page.close());

  it('load/display all books', async () => {
    await page.route('**/jsonstore/collections/books*', (route, request) => {
      route.fulfill(json(mockData));
    });

    await page.goto(url);

    await page.click('text=Load All books');

    await page.waitForSelector('text=Harry Potter');

    const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent));

    expect(rows[1]).to.contains('Harry Potter')
    expect(rows[1]).to.contains('J.K.Rowling')
    expect(rows[2]).to.contains('C# Fundamentals')
    expect(rows[2]).to.contains('Svetlin Nakov')
  });

  it('Test book creation', async () => {
    await page.goto(url);

    await page.fill('form#createForm >> input[name="title"]', 'TEST1');
    await page.fill('form#createForm >> input[name="author"]', 'CREATE');

    const [request] = await Promise.all([
      page.waitForRequest(request => request.method() == 'POST'),
      page.click('form#createForm >> text="Submit"')
    ]);

    mockData["d953e5fb-a585-4d6b-92d3-222222222"] = {author: 'CREATE', title: 'TEST1'};

    const data = JSON.parse(request.postData());
    expect(data.title).to.equal('TEST1');
    expect(data.author).to.equal('CREATE');
  });

  it('Test book editing', async () => {
    await page.route('**/jsonstore/collections/books*', (route, request) => {
      route.fulfill(json(mockData));
    });

    await page.goto(url);

    await page.click('text=Load All books');

    await page.waitForSelector('button.editBtn');
    await page.click('button.editBtn');

    const isVisible = await page.isVisible('#editForm');
    expect(isVisible).to.be.true;

    await page.fill('form#editForm >> input[name="title"]', 'TEST2');
    await page.fill('form#editForm >> input[name="author"]', 'EDIT');

    const [request] = await Promise.all([
      page.waitForRequest(request => request.method() == 'PUT'),
      page.click('form#editForm >> text="Save"')
    ]);

    const data = JSON.parse(request.postData());
    expect(data.title).to.equal('TEST2');
    expect(data.author).to.equal('EDIT');

    mockData["d953e5fb-a585-4d6b-92d3-ee90697398a0"] = {author: 'EDIT', title: 'TEST2'};

    await page.click('text=Load All books');

    await page.waitForSelector('td');
    const newName = await page.$$eval('td', td => td.map(e => e.textContent));
    expect(newName[0]).to.equal('TEST2');
    expect(newName[1]).to.equal('EDIT');
  });

  it('Test book deleting', async ()=> {
    await page.route('**/jsonstore/collections/books*', (route, request) => {
      route.fulfill(json(mockData));
    });
    await page.goto(url);
    await page.click('text=Load All books');

    await Promise.all([
      page.waitForRequest(request => request.method() == 'DELETE'),
      page.click('button.deleteBtn'),
      page.on('dialog', dialog => dialog.accept())
    ]);

    delete mockData["d953e5fb-a585-4d6b-92d3-ee90697398a0"];

    await page.click('text=Load All books');
    const books = await page.textContent('tbody');
    expect(books).to.not.contain('EDIT');
  });
});