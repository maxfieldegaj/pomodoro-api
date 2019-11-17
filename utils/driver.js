const webdriver = require('selenium-webdriver');

async function searchTextOnGoogle(url, action, name) {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);
        const button = await driver[action](webdriver.By.name(name));
        return {success: true, data: button}
    } catch(err) {
        return {success: false, error: err};
    }
    finally {
        // driver.quit();
    }
}

module.exports.searchTextOnGoogle = searchTextOnGoogle;