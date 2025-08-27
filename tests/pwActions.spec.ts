import {test, expect, Locator} from '@playwright/test'

test('Text Input Actions', async({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const nameTextBox : Locator = page.locator('#name');

    await expect(nameTextBox).toBeVisible();   // element visiable or not
    await expect(nameTextBox).toBeEnabled();   // to be enable or not

    const maxLength : string | null = await nameTextBox.getAttribute("maxlength");
    expect(maxLength).toBe('15');

    await nameTextBox.fill("John Candey");
    const enteredName: string =  await nameTextBox.inputValue();
    console.log("Text content of firstname:",await nameTextBox.textContent());  // returns empty
    console.log("Text content of firstname:", enteredName); // returns input of the text box
    expect(enteredName).toBe("John Candey");

    await page.waitForTimeout(3000);

})


test('Radio Button Actions', async({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const maleRadiobutton : Locator = page.locator("#male");

    await expect(maleRadiobutton).toBeVisible();
    await expect(maleRadiobutton).toBeEnabled();
    expect(await maleRadiobutton.isChecked()).toBe(false);   // check or not > returns T?F >>

    await maleRadiobutton.check();
    expect(await maleRadiobutton.isChecked()).toBe(true);
    await expect(maleRadiobutton).toBeChecked(); 

    await page.waitForTimeout(3000);

})

test.only('Check Box Actions', async({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    // 1. Select checkbox (Sunday) using getbylabel and assert

    const sundayCheckBox : Locator = page.getByLabel('Sunday');
    await sundayCheckBox.check();
    await expect(sundayCheckBox).toBeChecked();

    // 2. Select all checkboxes and assert each is checked
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']; // lables in string form

    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(6);

    // 3. Select all checkboxes and assert each is checked

    for(const checkbox of checkboxes){
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    } 
        
    await page.waitForTimeout(3000); 
   /* // 4. Uncheck last 3 checkboxes and assert

    for(const checkbox of checkboxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(3000); */

    // 5. Toggel checkboxes: If checked, uncheck; if checked, check. Assert state flipped.

  /*  for(const checkbox of checkboxes){
        if(await checkbox.isChecked()){
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }else{
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    } */
    

  /*  // 6. Randomly select checkboxes: using index (1,3,6) and assert

    const indexes: number [] = [1,3,6];
    for(const i of indexes){
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    } */

    // 7. Select the check box based on the label
    const weekname : string = "Friday";
    for(const label of days){
        if(label.toLowerCase() === weekname.toLowerCase()){
            const checkbox = page.getByLabel(label);
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }



    await page.waitForTimeout(3000);

})