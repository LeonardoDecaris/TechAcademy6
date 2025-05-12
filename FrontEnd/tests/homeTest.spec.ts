import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Interceptar requisições de login
    await page.route('**/api/login', async (route) => {
        const request = route.request();
        const postData = request.postDataJSON();

        // Mockar a resposta com base nos dados enviados
        if (postData.email === 'playwriteteste1@gmail.com' && postData.password === '123456') {
            route.fulfill({
                status: 401,
                contentType: 'application/json',
                body: JSON.stringify({ message: 'Error: Invalid email or password.' }),
            });
        } else {
            route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({ token: 'mock-token' }),
            });
        }
    });
});

test('Home Page title', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    expect(title).toBeTruthy();
});

test('Navegar ate botao login', async ({ page }) => {
    await page.goto('http://localhost:5173/home');
    await page.click('text=Log in');
    await expect(page).toHaveURL('http://localhost:5173/login');
});

test('Login com usuario correto e senha incorreta', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('123456');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario incorreto e senha correta', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.locator('#email').fill('testeError@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario e senha incorreta', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.locator('#email').fill('testeError@gmail.com');
    await page.locator('#password').fill('falsePassword');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    const error = await page.getByText("Error: Invalid email or password.");
    expect(error).toBeTruthy();
});

test('Login com usuario e senha correta', async ({ page }) => {
    await page.goto('http://localhost:5173/login');
    await page.locator('#email').fill('playwriteteste1@gmail.com');
    await page.locator('#password').fill('MH4q8Da3JXp2Hye#$');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.scrollIntoViewIfNeeded();
    await loginButton.click();

    await expect(page).toHaveURL("http://localhost:5173/home");

    const title = await page.getByText("The Power of audioVisual Harmonic Sound");
    
    await page.waitForTimeout(2000);
    expect(title).toBeTruthy();
});