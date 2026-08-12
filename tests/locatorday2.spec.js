import {test, expect} from '@playwright/test'

const HtmlFile = "file:///C:/Users/pawan/OneDrive/Documents/locatorPracticewebsite.html";

test('T1', async({page}) => {

    await page.goto(HtmlFile);

    await page.locator('.product-card').filter({hasText : 'iPhone 15'}).getByRole('button', ({name :'Add to Cart'})).click();
});

test('T2', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.product-card').filter({hasText : 'Samsung Galaxy S24'}).locator('.wishlist').click();

});

test('T3', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.cart-item').filter({hasText : 'MacBook Air M3'}).getByRole('button', ({name: 'Remove'})).click();

});

test('T4', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.order').filter({hasText : 'Sony WH-1000XM5'}).getByRole('button', ({name: 'Track Order'})).click();

});

test('T5', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.product-card').filter({hasText : 'Sony WH-1000XM5'}).getByRole('button', ({name: 'Add to Cart'})).click();

});

test('T6', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.product-card').filter({has : page.getByRole('heading', {name: 'Samsung Galaxy S24'})}).getByRole('button', {name: 'Add to Cart'}).click();
})

test('T7', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.product-card').filter({has : page.getByRole('button', {name: 'Add iPhone 15 to wishlist'})}).getByRole('button', {name: 'Add to Cart'}).click(); //doubt on question?

})

test('T8', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.cart-item').filter({has : page.getByRole('heading', {name: 'Samsung Galaxy S24'})}).getByRole('button', {name: 'Remove'}).click();
})

test('T9', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.order').filter({has : page.locator('.order-status shipped')}).getByRole('button', {name: 'Track Order'}).click();
})

test('T10', async({page}) => {
    await page.goto(HtmlFile);
    await page.locator('.product-card').filter({hasText : 'Only 3 left'}).getByRole('button', {name: 'Add to Cart'}).click();
})

