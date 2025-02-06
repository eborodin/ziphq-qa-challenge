import { test, expect, chromium } from '@playwright/test';
import { PageLocators } from '../locators.js';
import { LoginCredentials } from '../credentials';
import { pageURLs } from '../config.js'
import { navigateAndWait } from '../helpers.js';
test.use({ browserName: 'chromium' });

// for (let i = 0; i < 1; i++) {  // Run the test 5 times
//     test(`Login loop ${i + 1}`, async ({ page }) => {
//         await page.goto(pageURLs.loginPage);

// Login -- wait - check for Sign in to Zip
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
    const loginButton = page.locator(PageLocators.loginButton);
    const UpdaedPriceHoover = page.locator(PageLocators.UpdaedPriceHoover);
    const updatedPriceClickPen = page.locator(PageLocators.updatedPriceClickPen);
    const inputUpdatedPrice = page.locator(PageLocators.inputUpdatedPrice);
    const clickSaveButton = page.locator(PageLocators.clickSaveButton);
    const updatePriceChangeHeader = page.locator(PageLocators.updatePriceChangeHeader);
    const updatedPriceCheck = page.locator(PageLocators.updatedPriceCheck);
    const clickSaveChanges = page.locator(PageLocators.clickSaveChanges);
    const priceUpdateOne = "999.00";

    await emailField.click();
    await emailField.fill(LoginCredentials.email);
    await emailNextButton.click();
    // await page.waitForTimeout(3000);
    // await expect(page).toHaveURL(pageURLs.loginPage)
    await expect(forgotTextPW).toBeVisible();

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

    // await expect(page.locator(PageLocators.challangeHeader)).toBeVisible();
    // const isVisible = await page.locator(PageLocators.challangeHeader).isVisible()
    // console.log(isVisible ? 'Take home Challenge is visible' : 'Take home Challenge is NOT present');
    // Verify that "Take home Challenge" header is visible

    // Verify the pirce update 

    const currentPirce = await updatedPriceCheck.textContent();
    console.log('Retrieved Updated price:', currentPirce.trim());

    if (currentPirce === priceUpdateOne) {
        console.log("Price is already correct:", priceUpdateOne);
    } else {
        console.log("Price is not correct and needs to be updated");

        await page.waitForTimeout(1000)
        await UpdaedPriceHoover.hover();
        await page.waitForTimeout(3000)
        await updatedPriceClickPen.click();
        await inputUpdatedPrice.fill(priceUpdateOne);
        await clickSaveButton.click();

        if (await (updatePriceChangeHeader).isVisible()) {
            console.log("Save the changes")
            await clickSaveChanges.click();
        } else {
            console.log("No need to save changes. Procced to the next step.");
        }

        await expect(updatedPriceCheck).toContainText(priceUpdateOne);
        await page.waitForTimeout(10000)
    }
});