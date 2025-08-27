import {test, expect, Locator} from '@playwright/test'

test('Verify dropdown is sorted', async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropDownOptions: Locator = page.locator("#animals>option");  // sorted
   //const dropDownOptions: Locator = page.locator("#colors>option"); // not sorted
    console.log(dropDownOptions);
    const optionsText: string[]= (await dropDownOptions.allTextContents()).map(text => text.trim());
    
    console.log(optionsText);
    const originalList: string[] = [...optionsText];
    const sortedList: string[] = [...optionsText].sort();
    console.log("Original list:", originalList);
    console.log("Sorted list:", sortedList);
    expect(originalList).toEqual(sortedList);
})