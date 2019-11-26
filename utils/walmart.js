const webdriver = require('selenium-webdriver');

async function getPrice(product) {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://walmart.com');
        // landing
        const searchInput = await driver.findElement(webdriver.By.name('query'));
        await searchInput.sendKeys(product, webdriver.Key.ENTER);
        // welcome
        await findIdAndClick(driver,'get-started-continue-btn');
        const data =  await findIdAndClick(driver,'get-started-continue-btn');
        return {success: true, data};
    }
    catch (err) {
        // uncomment the following if you don't want the window to remain open
        // driver.quit()
        console.error(err);
        return {success: false, error: err}
    }
    async function findIdAndClick(driver, button) {
        await driver.findElement(webdriver.By.id(button)).click();        
    }
}

module.exports.getPrice = getPrice;