import { test, expect } from '@playwright/test';

test('Navegar ate botao login', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.click('text=Log in');
    await expect(page).toHaveURL('http://localhost:5173/login');

    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await expect(page).toHaveURL("http://localhost:5173/home");
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    await page.waitForTimeout(500);
    expect(title).toBeTruthy();

    

});