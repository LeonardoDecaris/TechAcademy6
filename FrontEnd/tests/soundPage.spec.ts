import { test, expect } from '@playwright/test';

test.describe('Testes SoundPage Autenticados', () => {
    test.beforeEach(async ({ page }) => {
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

        await page.click('a:has-text("Sound")');
        await expect(page).toHaveURL("http://localhost:5173/sound");
    });

    test('Play sound', async ({ page }) => {
        const playButton = page.getByRole('button', { name: 'Play' });
        await playButton.scrollIntoViewIfNeeded();
        await playButton.click();
        await page.waitForTimeout(2000);
        const pauseButton = page.getByRole('button', { name: 'Pause' });
        expect(pauseButton).toBeTruthy();
    });
});

