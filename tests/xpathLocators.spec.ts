import {test, expect, Locator} from '@playwright/test'

test('XPath demo', async({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute xpath
    const absoluteLogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absoluteLogo).toBeVisible();

    // 2. Realtive xpath
    const realtiveLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(realtiveLogo).toBeVisible();

    // 3. contains
     const products: Locator =  page.locator("//h2/a[contains(@href,'computer')]");
     const productsCount: number =  await products.count();
     console.log("First compluter related product:", await products.first().textContent());
     console.log("Last compluter related product:", await products.last().textContent());
     console.log("Nth compluter related product:", await products.nth(1).textContent());

     let productTitles: string[] = await products.allTextContents();
     
     for(let pt of productTitles){
        console.log(pt);
     }
  
})

