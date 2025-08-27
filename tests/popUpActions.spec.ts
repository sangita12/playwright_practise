import { test, expect, Locator} from '@playwright/test'

test('Saving storage - data is cleared - accept dialog', async({ page }) => {

    page.on('dialog', dialog => dialog.accept());

    const someName = 'Alex';
    
    await page.goto('http://localhost:5000/FeedBackForm.html');

    const nameField : Locator = page.getByRole('textbox', { name: 'Name (required):'});

    await nameField.fill(someName);

    await page.getByRole('button', { name : 'Save Progress'}).click();

    await page.reload();

    await page.getByRole('button', { name : 'Clear Progress'}).click();

    await page.reload();

    await expect(nameField).toBeEmpty();
    
    await page.waitForTimeout(3000);
})

test.only('Saving storage - data is not cleared - reject dialog', async ({ page }) =>{

    page.on('dialog', dialog => {
        if(dialog.message().includes('clear the form progress?')){
            dialog.dismiss();
            return;
        }
        dialog.accept();
    })

    await page.goto('http://localhost:5000/FeedBackForm.html');

    const someName = 'Rose';

    const nameField : Locator = page.getByRole('textbox', { name: 'Name (required):'});

    await nameField.fill(someName);

    await page.getByRole('button', { name: 'Save Progress'}).click();

    await page.reload();
    await page.waitForTimeout(3000);

    await page.getByRole('button', { name: 'Clear Progress'}).click();

    await page.reload();

    await expect(nameField).not.toBeEmpty();
    await page.waitForTimeout(3000);



})