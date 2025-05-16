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

test('Fazer logout', async ({ page }) => {
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
    await page.waitForTimeout(200);
    expect(title).toBeTruthy();

    await page.locator('#dropDownButton').click();
    await page.click('text=Log out');
    const confirmLogout = page.getByRole('button', { name: 'Confirm' });
    await confirmLogout.scrollIntoViewIfNeeded();
    await confirmLogout.click();
    await expect(page).toHaveURL("http://localhost:5173/home");
    await page.waitForTimeout(200);

    // const buttonLogin = page.getByRole('button', { name: 'Login' });
    // await buttonLogin.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(500);
    // expect(buttonLogin).toBeTruthy();
});


test('Botao GitHub', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.click('text=GitHub');
    const signUp = page.getByRole('button', { name: 'Sign up' });
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
