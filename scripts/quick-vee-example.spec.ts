import { test, expect } from '@playwright/test';

test('click a button', async ({ page }) => {



  await page.goto('https://www.quickvee.com/merchants/login');
  // await page.waitForNavigation()

  await page.waitForTimeout(2000);

  await page.waitForLoadState('networkidle');


  await page.fill('input[name="storename"]', '*'); // TODO read these from .env
  await page.fill('input[name="username"]', '*');
  await page.fill('input[name="password"]', '*');

  await page.click('button:has-text("Login")');
  await page.waitForTimeout(2000);
  // await page.waitForLoadState('networkidle');



  // await page.waitForNavigation()

  // await page.waitForLoadState('networkidle');
  // await page.waitForLoadState('networkidle');
  // await page.waitForLoadState('networkidle');

  // await page.goto('https://www.quickvee.com/merchants/store-reporting/detailed-loyalty-points-report');
  // await page.waitForNavigation()

  // await page.waitForLoadState('networkidle');
  await page.goto('https://www.quickvee.com/merchants/store-reporting/detailed-loyalty-points-report');

  await page.waitForTimeout(2000);
  await page.waitForSelector('.page-link');
  await page.waitForTimeout(2000);
  
  
  // set to 100 per page
  
  // Click to open the combobox (dropdown)
  await page.click('[role="combobox"]');
  
  // Optionally, wait for the options to appear
  await page.waitForSelector('[role="listbox"]'); // Assuming the combobox options are inside a listbox
  
  // Click the option with the value "100"
  await page.click('[role="option"]:has-text("100")');
  
  await page.waitForTimeout(2000);
  await page.waitForSelector('.page-link');
  await page.waitForTimeout(2000);

  const buttons = await page.locator('.page-link').all();

  const lastButtonText = await buttons[buttons.length - 1].textContent()
  const index4ButtonText = await buttons[4].textContent()

  console.log("lastButtonText: " + lastButtonText)

  console.log("there are: " + buttons.length + " buttons");

  console.log("index 4 button: " + index4ButtonText);
  for (const button of buttons) {
    const btnText = await button.textContent();
    console.log(btnText);

    // if (btnText === "2") {
    //   await button.click();
    // }
  }


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
