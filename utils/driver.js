const webdriver = require('selenium-webdriver');

function searchTextOnGoogle() {
    const driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://dknhy7rc6qezw.cloudfront.net/#/').then(() => {
        driver.findElement(webdriver.By.name('Get Started')).click().then(() => {
            driver.getTitle().then((title) => {
                setTimeout(() => {
                    console.log(title);
                    driver.quit();
                }, 5000);
            })
        }).catch(err => {
            console.error(err);
            driver.quit();
        })
    })
}

module.exports.searchTextOnGoogle = searchTextOnGoogle;