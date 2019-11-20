var express = require('express');
var router = express.Router();
const driver = require('../utils/driver');
const supplydrop = require('../utils/supplydrop');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: Test.first(true) });
});

router.get('/drive', async (req,res,next) => {
  try {
    const {url, commands} = req.body;
    const result = await driver.searchTextOnGoogle(url, commands);
    if(result.success) {
      res.status(200).send(result.data);
    } else {
      res.status(500).send(result.error);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get('/interview', async (req, res, next) => {
  try{
    const result = await supplydrop.interview();
    if(result.success) {
      return res.status(200).send(result.data);
    } else {
      res.status(500).send(result.error);
    }
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
