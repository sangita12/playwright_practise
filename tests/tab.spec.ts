import { test, expect, Page , Locator, Browser, BrowserContext } from '@playwright/test'
import { promiseHooks } from 'v8';

test('Handle new tab', async({ browser }) => {

    // Create a new incognito browser context.
    const context: BrowserContext = await browser.newContext();
    
    // Create a new page in a pristine context.

    const page: Page = await context.newPage();

    await page.goto("https://training.rcvacademy.com/")    

    // Knoweledged of new page
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//img)[3]").click()      
    ])

    const courseLink : Locator = newPage.locator("//button[@aria-label='Install']");
    await courseLink.click();
    await page.waitForTimeout(2000);
    const cancelButton : Locator = newPage.locator("(//button[contains(text(), 'Cancel')])[2]");
    await cancelButton.click();
     await page.waitForTimeout(2000);
    await newPage.close();

    await page.locator("(//*[@id='name'])[1]").fill("testing tabs");
     await page.waitForTimeout(2000);
    await page.close();


    

    


})
