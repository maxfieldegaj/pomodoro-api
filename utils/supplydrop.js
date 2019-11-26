const webdriver = require('selenium-webdriver');

async function interview() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:3000/#/');
        // landing
        const nameInput = await driver.findElement(webdriver.By.name('name'));
        await nameInput.sendKeys('Test', webdriver.Key.ENTER);
        // welcome
        await findIdAndClick(driver,'get-started-continue-btn');
        // self
        await findIdAndClick(driver,'self-male-btn');
        await findIdAndClick(driver,'gender-continue-btn');
        const ageInput = await driver.findElement(webdriver.By.name('self-age'));
        ageInput.sendKeys('26', webdriver.Key.ENTER);
        // tiers
        await findIdAndClick(driver,'brand-btn');
        await findIdAndClick(driver,'tiers-continue-btn');
        // household
        await findIdAndClick(driver,'adult-increment-btn');
        await findIdAndClick(driver,'family-female-btn');
        const familyAge = await driver.findElement(webdriver.By.name('family-age'));
        familyAge.sendKeys('25', webdriver.Key.ENTER);
        await findIdAndClick(driver,'pet-increment-btn');
        await findIdAndClick(driver,'dog-btn');
        await findIdAndClick(driver,'family-continue-btn');
        // stays home
        await findIdAndClick(driver, 'member-0-btn');
        await findIdAndClick(driver, 'family-continue-btn');
        // guests
        await findIdAndClick(driver, 'guests-continue-btn');
        // bathrooms
        await findIdAndClick(driver, 'bathrooms-continue-btn');
        // refills
        await findIdAndClick(driver, 'refills-btn');
        await findIdAndClick(driver, 'refills-continue-btn');
        // scents
        await findIdAndClick(driver, 'unscented-btn');
        await findIdAndClick(driver, 'scents-continue-btn');
        // trash
        await findIdAndClick(driver, 'kitchen-btn');
        await findIdAndClick(driver, 'trash-continue-btn');
        await findIdAndClick(driver, 'trash-bags-increment-btn');
        await findIdAndClick(driver, 'trash-frequency-increment-btn');
        await findIdAndClick(driver, 'trash-continue-btn');
        // dishwashing
        await findIdAndClick(driver, 'dw-increment-btn');
        await findIdAndClick(driver, 'dw-continue-btn');
        await findIdAndClick(driver, 'dw-sponge-btn');
        await findIdAndClick(driver, 'dw-continue-btn');
        // laundry
        await findIdAndClick(driver, 'laundry-increment-btn');
        await findIdAndClick(driver, 'laundry-continue-btn');
        await findIdAndClick(driver, 'laundry-packs-btn');
        await findIdAndClick(driver, 'laundry-continue-btn');
        // housekeeping
        await findIdAndClick(driver, 'housekeeping-increment-btn');
        await findIdAndClick(driver, 'housekeeping-continue-btn');

        // uncomment the following if you don't want the window to remain open
        // driver.quit();
        return {success: true};
    } catch (error) {
        // uncomment the following if you don't want the window to remain open
        // driver.quit()
        console.error(error);
        return {success: false, error}
    }

    async function findIdAndClick(driver, button) {
        await driver.findElement(webdriver.By.id(button)).click();        
    }
}

module.exports.interview = interview;
