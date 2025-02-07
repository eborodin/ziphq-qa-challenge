import { test, expect, chromium } from '@playwright/test';
import { PageLocators } from '../locators.js';
import { LoginCredentials } from '../credentials';
import { pageURLs } from '../config.js'
import { navigateAndWait } from '../helpers.js';
test.use({ browserName: 'chromium' });

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
    const labelLegalApproval = page.locator(PageLocators.labelLegalApproval);
    const labelBudgetApproval = page.locator(PageLocators.labelBudgetApproval);
    const labelManagerApproval = page.locator(PageLocators.labelManagerApproval);
    const buttonDepartmentApproval = page.locator(PageLocators.buttonDepartmentApproval);
    const checkLegalApprovalVerified = page.locator(PageLocators.checkLegalApprovalVerified);
    // Price Validation Values
    const inputPriceValue = "500.01";
    const expectedPrice = "500.00";
    const inputPriceOne = "100.00";
    const inputPriceTwo = "450";
    const inputPriceThree = "99.99";

    await emailField.click();
    await emailField.fill(LoginCredentials.email);
    await emailNextButton.click();
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
    const url = `${pageURLs.requestUrl}${pageURLs.requestId}`;
    console.log("Navigating to QA Challenge Dashboard", url);
    await page.goto(url);
    await navigateAndWait(page, url, 3000)
    await expect(page).toHaveURL(url);

    // const displayedPrice = await updatedPriceCheck.textContent();
    // console.log('Retrieved price:', displayedPrice.trim());

    // ** Verify Approval Triggering Rules **
    const displayedPrice = parseFloat(await updatedPriceCheck.textContent().then(text => text.replace(/[^0-9.]/g, '')));
    console.log("Retrieved numeric price:", displayedPrice);

    //Current price > 100 USD but < 500 -> triggers budget approval - Verify Budget approval is triggered
    if (displayedPrice > inputPriceOne && displayedPrice < expectedPrice) {
        console.log("You need Budget & Legal Approvals", displayedPrice);
        await expect(labelLegalApproval).toBeVisible();
        await expect(labelBudgetApproval).toBeVisible();

        //Current price > 500 USD -> triggers Managers approval. Check if Budget approval is triggered.
    } else if (displayedPrice > expectedPrice) {
        console.log("You need the Manager Approval", displayedPrice);
        await expect(labelManagerApproval).toBeVisible();
        // await expect(labelBudgetApproval).toBeVisible();
        // await expect(labelLegalApproval).toBeVisible();

    } else {
        console.log("You are all set, need only Legal Approval")
    }
    await expect(labelLegalApproval).toBeVisible();
    await page.waitForTimeout(1000);

    // ** Confirm Price Update to 500.01 and Manager Approval Trigger **
    if (displayedPrice === inputPriceValue) {
        console.log("Price is already correct:", inputPriceValue);
    } else {
        console.log("Price is not correct and needs to be updated");

        await page.waitForTimeout(1000)
        await UpdaedPriceHoover.hover();
        await updatedPriceClickPen.click();
        await inputUpdatedPrice.fill(inputPriceValue);
        await clickSaveButton.click();

        if (await (updatePriceChangeHeader).isVisible()) {
            console.log("Save the changes")
            await clickSaveChanges.click();
        } else {
            console.log("No need to save changes. Procced to the next step.");
        }
        await expect(updatedPriceCheck).toContainText(inputPriceValue);
    }

    // **Verify the Approval of Legal task **
    if (await buttonDepartmentApproval.isVisible()) {
        await buttonDepartmentApproval.hover();
        await buttonDepartmentApproval.click();
        console.log("Congratulations! Your first Zip Request has been successfully approved!")
    } else {
        console.log("Legal Approval has been processed successfully.")
    }
    await labelLegalApproval.click();
    await checkLegalApprovalVerified.isVisible();

    await page.waitForTimeout(10000);
});