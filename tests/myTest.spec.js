export default {
    use: {
        headless: true, // Run all tests in headless mode
    },
};

import { test, expect, chromium } from '@playwright/test';
test.use({ browserName: 'chromium' });

for (let i = 0; i < 1; i++) {  // Run the test 5 times
    test(`Login loop ${i + 1}`, async ({ page }) => {
        await page.goto('https://qa.ziphq.com/login');

        const signInZip = page.locator('text="Sign in to Zip"', { timeout: 5000 });

        const isTextVisible = await signInZip.isVisible();
        console.log(isTextVisible ? "Login Text is visible!" : "Login Text is NOT visible!");

        const testEmail = "enborodin+qatesting@gmail.com"
        const testPW = "qqZT64Vwf4##v9&5"

        const emailField = page.locator('//input[@id="email"]', { timeout: 5000 })
        const emailNextButton = page.locator('//div//button[@class="bp730pe s1hfe04e sienn4l sslpsxn beysths ciu5cso l16phmm6"]/span');
        const forgotTextPW = page.locator('text = Forgot your password?"', { timeout: 5000 });
        const passwordField = page.locator('//input[@id="password"]', { timeout: 5000 })
        const loginButton = page.locator('//button[@data-testid="loginButton"]', { timeout: 5000 })

        //await page.screenshot({ path: 'before-click.png' });
        await emailField.click();
        //await page.screenshot({ path: 'after-click.png' });
        await emailField.fill(testEmail);
        await emailNextButton.click();
        await page.waitForTimeout(3000);  // Wait for 3 seconds
        //await expect(page).toHaveURL(forgotTextPW);

        console.log(forgotTextPW ? 'Element is visible' : 'Element is NOT present');
        await passwordField.fill(testPW);
        await loginButton.click()
        await page.waitForTimeout(10000);  // Wait for 3 seconds

        // Clicking forgot PW
        // await forgotTextPW.click()
        // const resetPWText = page.locator('text = "Reset your password"', { timeout: 5000 });
        // const isForgotPWText = await resetPWText.isVisible();
        // console.log(isForgotPWText ? "Text is visible!" : "Text is NOT visible!");

    });
}

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