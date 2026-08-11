import {test,expect} from '@playwright/test'
import { Agent } from 'node:http';

test('T1', async({page}) => {

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F100-physical-gift-card');
    await page.pause(); //used for captcha, still cannot bypass

    await page.getByRole('radio', {name: 'Male'}).click();
    await page.getByLabel('First name:').fill('test');
    await page.getByRole('textbox', {name: 'Last name:'}).fill('sat');
    await page.getByRole('textbox', {name: 'Email:'}).fill('testing@gmail.com');

    await expect(page.getByRole('heading', {name: 'Company Details'})).toBeVisible();
    await page.getByRole('textbox', {name: 'Company name:'}).fill('apple');

    await page.getByRole('checkbox', {name: 'Newsletter'}).check();

    await page.getByLabel('Password:').fill('12345');
    await page.getByLabel('Confirm password:').fill('12345');

    await page.getByRole('button', {name: 'Register'}).click();
})

test('T2', async({page}) => {

   await page.goto('https://demo.nopcommerce.com/100-physical-gift-card')
    await page.pause(); 

   await expect(page.getByRole('heading', {name: '$100 Physical Gift Card'})).toBeVisible();
   await expect(page.getByAltText('Picture of $100 Physical Gift Card')).toBeVisible();

   await page.getByRole('link', {name: '1 review(s)'}).click();

   await page.getByRole('textbox', {name: "Recipient's Name:"}).fill('jhon');
   await page.getByRole('textbox', {name: 'Your Name:'}).fill('doe');
   await page.getByRole('textbox', {name: 'Message:'}).fill('hello');

   await page.getByRole('textbox', {name: 'Qty:'}).fill('5');
   await page.getByRole('button', {name: 'Add to cart'}).click();

   await page.getByRole('button', {name: 'Add to wishlist'}).click();
   await page.getByAltText('facebook sharing button').click(); 
})