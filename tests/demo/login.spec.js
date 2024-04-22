import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'


test.only('test1',async({page})=>{
  const Login = new LoginPage(page)
  await Login.gotoLoginPage('https://the-internet.herokuapp.com/login')
  await Login.login('tomsmith','SuperSecretPassword!')
})

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
});