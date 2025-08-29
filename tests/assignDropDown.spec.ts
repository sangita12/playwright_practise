import {test, expect, Locator} from '@playwright/test'

test('Verify Product Sorting and Information Retrieval', async({page}) => {
    // 1. Navigate to the Webpage

    await page.goto("https://www.bstackdemo.com/");

    //2. Interact with the "Order by" Dropdown
    const dropDownEle: Locator = page.locator("select");
    const textDropDown: string[] = await (page.locator("option")).allTextContents();
    console.log(textDropDown);

    await expect(dropDownEle).toBeEnabled();
    await expect(dropDownEle).toBeVisible();

    await dropDownEle.selectOption("Lowest to highest");

    //3. Retrieve and Print Product Information
    const productPriceList: Locator = page.locator(".shelf-item__price");
    console.log("List of product price:", await productPriceList.allTextContents());

    const productNameList: Locator = page.locator(".shelf-item__title");
    console.log("List of product name:", await productNameList.allTextContents());

    await expect(productPriceList).toHaveCount(25);
    await expect(productNameList).toHaveCount(25);

    

})