import {test, expect, Locator} from '@playwright/test'

test('Drop down actions', async({ page }) => {

    await page.goto("https://www.bstackdemo.com/");

    // Locate the "Order by" dropdown element.

    const option : Locator = page.locator("Select");
    
    // Verify the dropdown is displayed and enabled.

    await expect(option).toBeVisible();
    await expect(option).toBeEnabled();

    // Select the option "Lowest to highest" from the dropdown.

    // await option.selectOption({value: "lowestprice"});   // by using value attibute
    // await option.selectOption("Lowest to highest");  //  visible text
    await option.selectOption({index: 1});  // by using index    
    
    // 2. Check an option present in the dropdown

    const options: Locator = page.locator("div[class='sort'] select option");
    const optionsText: string[] = await options.allTextContents();
    expect(optionsText).toContain("Lowest to highest");
    
    // 3. Printing options from the dropdown
    for(const ele of optionsText){
         console.log("Options:", ele);
    }

   

    await page.waitForTimeout(3000);



});