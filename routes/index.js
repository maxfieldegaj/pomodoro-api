var express = require('express');
var router = express.Router();
const driver = require('../utils/driver');
const supplydrop = require('../utils/supplydrop');
const walmart = require('../utils/walmart');
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

router.post('/walmart', async (req,res,next) => {
  try {
    const {upcs} = req.body;
    const results = [];
    const errors = [];
    
    for(let i = 0; i < upcs.length; i++) {
      const result = await walmart.getPrice(upcs[i]);
      if(result.success) {
        results.push(result.data);
      } else {
        errors.push(`Error on ${upcs[i]}`);
      }
    }
    if(results.length) {
      res.status(200).send({results, errors});
    } else {
      res.status(500).send("Something went wrong");
      console.error(error);
    }
  } catch (error) {
    res.status(500).send(error);
    console.error(error);
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
