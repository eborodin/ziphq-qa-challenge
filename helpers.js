export const navigateAndWait = async (page, url, timeout = 3000) => {
    await page.goto(url);
    await page.waitForTimeout(timeout);
};