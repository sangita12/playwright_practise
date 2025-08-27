import {test, expect, Locator} from '@playwright/test'

test('Saving cookies - user actions - accept cookies', async({ page }) => {
     await page.goto('http://localhost:5000/');
     const acceptButton: Locator = page.getByRole('button', {name: 'accept'});
     await acceptButton.click();
     // assert that the cookie banner is not visible:
     const cookieBanner: Locator = page.locator("#cookie-banner");
     await expect(cookieBanner).not.toBeVisible();    
})

test.only('Saving cookies - user actions - reject', async({ page }) => {
    await page.goto('http://localhost:5000/');
    const rejectBuuton: Locator = page.getByRole('button', {name: 'decline'});
    await rejectBuuton.click();
    // assert that the cookie banner is not visible:
    const cookieBanner: Locator = page.locator("#cookie-banner");
    await expect(cookieBanner).not.toBeVisible();   
    
    await page.reload();

    await page.waitForTimeout(3000);

    await expect(cookieBanner).toBeVisible();

})