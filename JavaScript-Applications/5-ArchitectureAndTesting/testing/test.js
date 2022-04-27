const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

describe('Tests', async function () {
    this.timeout(15000);

    let page, browser;

    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 1500});
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });
    it('loads and displays all books', async () => {
        await page.goto('http://localhost:5500');
        await page.click('text=Load All Books');
        await page.waitForSelector('text=Harry Potter');
        const rows = await page.$$eval('tr', (rows) => rows.map(r => r.textContent));
        expect(rows[1]).to.contains("Harry Potter and the Philosopher's Stone");
        expect(rows[1]).to.contains('J.K.Rowling');
        expect(rows[2]).to.contains('C# Fundamentals');
        expect(rows[2]).to.contains('Svetlin Nakov');

    });
    it('can create book', async () => {
        await page.goto('http://localhost:5500');
        await page.fill('form#createForm >> input[name="title"]', 'Title');
        await page.fill('form#createForm >> input[name="author"]', 'Author');
        const [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST'), 
            page.click('form#createForm >> text=Submit')
        ]);
        const data = JSON.parse(request.postData());
        expect(data.title).to.equal('Title');
        expect(data.author).to.equal('Author');

        
    });
    it('can edit book', async () => {
        await page.goto('http://localhost:5500');
        await Promise.all([
            page.click('text=Load All Books'),
            page.click('.editBtn')
        ]);
        await page.fill('#editForm input[name="title"]', 'Edited book');
        await page.click('text=Save');
        await page.click('text=Load All Books');
        const content = await page.textContent('table tbody');
        expect(content).to.contain('Edited book');

    });
    it('can delete book', async () => {
        await page.goto('http://localhost:5500');
        await Promise.all([
            page.click('text=Load All Books'),
            page.click('.deleteBtn')
        ]);
        await page.click('text=Load All Books');
        const content = await page.textContent('table tbody');
        expect(content).not.to.contain("Harry Potter and the Philosopher's Stone");

    });

});