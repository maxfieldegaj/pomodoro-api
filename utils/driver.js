const webdriver = require('selenium-webdriver');

async function searchTextOnGoogle(url, commands) {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);

        commands.map(async (command) =>  {
            const {query, by, name, action, type} = command;
            // TODO:
            // create switch statement for 'types' of queries/ actions
            try {
                await driver[query](webdriver.By[by](name))[action]();
            } catch(err) {
                return {success: false, error: err}
            }
        })
        return {success: true}
    } catch(err) {
        return {success: false, error: err};
    }
    finally {
        // driver.quit();
    }
}

module.exports.searchTextOnGoogle = searchTextOnGoogle;