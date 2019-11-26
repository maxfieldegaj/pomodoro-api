const webdriver = require('selenium-webdriver');

async function getPrice(upc) {
    const driver = new webdriver.Builder().forBrowser('chrome').build();
    try {
        await driver.get(`https://walmart.com/search/?query=${upc}`);
        const element = await findFirstOfClass('search-result-product-title');
        await element.click();
        let title = await findFirstOfClass('prod-ProductTitle');
        title = await title.getText();
        let price = await findFirstOfClass('price display-inline-block arrange-fit');
        price = await price.getText();
        const data = {title, price};
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

    async function findFirstOfClass(name) {
        try {
            const elements = await driver.findElements(webdriver.By.className(name));
            console.log(name, elements.length);
            return elements[0];
        } catch (err) {
            return ({error: err});
        }
    }
}

module.exports.getPrice = getPrice;