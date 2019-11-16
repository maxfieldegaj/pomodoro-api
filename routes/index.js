var express = require('express');
var router = express.Router();
const driver = require('../utils/driver');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: Test.first(true) });
});

router.get('/test', (req,res,next) => {
  console.log(driver);
  driver.searchTextOnGoogle().then(() => {
    res.status(200);
  })
})

module.exports = router;
