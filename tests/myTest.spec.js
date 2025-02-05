import { test, expect, chromium } from '@playwright/test';
import { PageLocators } from '../locators.js';
import { LoginCredentials } from '../credentials';
import { pageURLs } from '../config.js'
import { navigateAndWait } from '../helpers.js';
test.use({ browserName: 'chromium' });

// for (let i = 0; i < 1; i++) {  // Run the test 5 times
//     test(`Login loop ${i + 1}`, async ({ page }) => {
//         await page.goto(pageURLs.loginPage);
test('Navigate to Login Page', async ({ page }) => {
    await navigateAndWait(page, pageURLs.loginPage, 3000);  // Use stored URL
    await expect(page).toHaveURL(pageURLs.loginPage);

    await expect(page.locator(PageLocators.zipLogoText)).toBeVisible();
    // const signInZip = page.locator('text="Sign in to Zip"', { timeout: 5000 });
    // const isTextVisible = await signInZip.isVisible();
    // console.log(isTextVisible ? "Login Text is visible!" : "Login Text is NOT visible!");

    const emailField = page.locator(PageLocators.emailField);
    const emailNextButton = page.locator(PageLocators.emailNextButton);
    const forgotTextPW = page.locator(PageLocators.forgotTextPW);
    const passwordField = page.locator(PageLocators.passwordField);
    const loginButton = page.locator(PageLocators.loginButton)
    await emailField.click();
    await emailField.fill(LoginCredentials.email);
    await emailNextButton.click();
    // await page.waitForTimeout(3000);
    // await expect(page).toHaveURL(pageURLs.loginPage)
    await expect(page.locator(PageLocators.forgotTextPW)).toBeVisible();

    // console.log(forgotTextPW ? 'Forgot Password is visible' : 'Forgot Password is NOT present');
    await passwordField.fill(LoginCredentials.password);
    await loginButton.click()
    await page.waitForTimeout(3000);

    // Test Forgot your password?
    // await forgotTextPW.click()
    // const resetPWText = page.locator('text = "Reset your password"', { timeout: 5000 });
    // const isForgotPWText = await resetPWText.isVisible();
    // console.log(isForgotPWText ? "Text is visible!" : "Text is NOT visible!");

    // Get to the Dashboard 
    //await page.goto(pageURLs.dashboard);
    await navigateAndWait(page, pageURLs.dashboard, 3000)
    await expect(page).toHaveURL(pageURLs.dashboard);
    await expect(page.locator(PageLocators.challangeHeader)).toBeVisible();
    // const isVisible = await page.locator(PageLocators.challangeHeader).isVisible()
    // console.log(isVisible ? 'Take home Challenge is visible' : 'Take home Challenge is NOT present');
    // Verify that "Take home Challenge" header is visible

    await page.waitForTimeout(3000)

});


// const isVisible = await page.locator("//div[@class='cfu91ot']//h1[@class='s1f4rh5s]", { timeout: 5000 }).isVisible()
// console.log(isVisible ? 'Element is visible' : 'Element is NOT present');

// expect(isVisible).toBe(true);




// test('Verify if Title is visible', async ({ page }) => {
//     await page.goto('https://qa.ziphq.com/request/067a2567-a48c-72a0-8000-1276ee4224d9');

//     const isVisible = await page.locator('//div/div[@class="t11vrf9q w171sleo suktnmo l9x6fqg cyr962 t1t13vor t1ft2z5b"]').isVisible()
//     console.log(isVisible ? 'Element is visible' : 'Element is NOT present');

//     expect(isVisible).toBe(true);

// });



// Login -- wait - check for Sign in to Zip
// Click on Email failed
// Input email
// click on Next -
// wait for Password
// type in Password
// click on Log in
// Go to take Home URL - verify page load

// "companyId": "9ca76a80-b7a0-4b0d-aea7-ac4d8de3698b",
// IjdkYzdkNzFmZDBiZmJhMDg2YTcwZDg4ZmJlYjA0ZjE1ZmVkMDE2ZDgi.GoQTng.YKYrhaPieeGXROeTu74EPsGZ2hk
// 635f5914-e1c5-47be-826c-6111fc9ed8ac
//
// intercom - id - jpvqigu7=d844655f - 6c70 - 4737 - a741 - 0a01010e50a9; intercom - device - id - jpvqigu7=b4210383 - c7e8 - 44a0 - 8b6c - 3074185defe1; _gcl_au = 1.1.1483773803.1737952580; oauth_state = RkYlyCHZhnKcONEZ; G_ENABLED_IDPS = google; qa_session =.eJw9j8FOxDAMRP8l560UN7GT7s9UtmPDiqVFTXtC_DtBII4jzTy9 - Qzrhx3vvNl2hvt5XHYL2g9fz_3NtnAPpWlpBbxFceFYiUtstbqYxOyAbi0CtRpuYX20MUjEnMERUYSSR0lJa1oiYSbTpQpnystc0SDHxJoamsvoQyo1OtNMRKmiSyyAao6KFplc2wKDnAQLOjTzRnUwkF15FlePMxnAEHlsa79kZdX92s7Vn_wS7s7PPs6tflh__Y9Xt - PXGyAC4lg_95cfgPX - 2Le_T - oYh9MkteiUW8GpOvLUHJaFMrTZPXx9AwtTY6M.GoQbOA.KAS3yNq3RMTs2diP1gG9ISDqWOc; _dd_s = logs = 1 & id=6231efa7 - 4db0 - 429c - a1db - 353a347eaa7a & created=1738699483291 & expire=1738706250058