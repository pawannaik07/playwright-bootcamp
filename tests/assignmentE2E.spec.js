import { test, expect } from "@playwright/test";

const website = "https://demowebshop.tricentis.com/";

test("TC01 — Verify Home Page Elements", async ({ page }) => {
  await page.goto(website);

  await expect(page.getByRole("link", { name: "Register" })).toBeVisible();

  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  //  await expect(page.locator('.ico-cart')).toBeVisible(); resolved 2 elements taking 1st element
  //    const link = page.locator('.ico-cart').filter({hasText : 'Shopping cart'}).locator('.cart-label');
  //    link.toBeVisible();
  // await expect(page.locator('.cart-label')).toBeVisible();
  // page.locator('#topcartlink').filter({has: page.locator('.ico-cart')}).toBeVisible(); why filter not working?
  await expect(page.locator("#topcartlink")).toBeVisible();

  // await expect(page.locator('.ico-wishlist')).toBeVisible();

  // await expect(page.locator('.ico-wishlist').filter({hasText : 'Wishlist'})).toBeVisible();

  // await expect(page.locator('.ico-wishlist', {hasText : 'Wishlist'})).toBeVisible(); // did not understand why it did not locate

  await expect(page.locator(".ico-wishlist").first()).toBeVisible();

  await expect(page.locator(".topic-html-content")).toContainText("Welcome to our store"); // tohavetext didnt work, when to use filter?parent-child?

  const menu = page.locator(".top-menu");

  await expect(menu.getByRole("link", { name: "Books" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Computers" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Electronics" })).toBeVisible();
  await expect(menu.getByRole("link", { name: "Apparel & Shoes" })).toBeVisible();
});

test("TC02 — Search for a Product", async ({ page }) => {
  await page.goto(website);
  const search = page.locator('#small-searchterms');
  await search.fill("Laptop");
  await search.press('Enter');
  //14.1-inch Laptop
  await expect(page).toHaveURL('https://demowebshop.tricentis.com/search?q=Laptop');
  await expect(page.locator('.product-title')).toContainText('14.1-inch Laptop')
  await expect( page.locator('.search-text')).toHaveValue('Laptop')

});

test("TC03 — Add Product to Cart", async ({ page }) => {
   await page.goto(website);
   const search = page.locator('#small-searchterms');
  await search.fill("Laptop");
  await search.press('Enter');
   await page.getByAltText('Picture of 14.1-inch Laptop').click();
   await expect(page.locator('.product-name')).toContainText('14.1-inch Laptop');
   await expect(page.locator('.product-price')).toHaveText('1590.00')
   await page.getByRole('button', {name:'Add to Cart'}).click();

 await expect(page.locator('.cart-qty')).toHaveCount(1);
   // await expect(page.locator('.cart-qty')).toHaveText('(1)'); whats the diff between count and text?
   await page.locator('#topcartlink').click();
   await expect(page.locator('.product-name')).toHaveText('14.1-inch Laptop');


})
