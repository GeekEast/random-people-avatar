var express = require('express');
var router = express.Router();
const random = require('lodash/random');
const request = require('request');

/* GET users listing. */
router.get('/', async function (req, res) {
  const url =
    random() === 0
      ? `https://randomuser.me/api/portraits/women/${random(100)}.jpg`
      : `https://randomuser.me/api/portraits/men/${random(100)}.jpg`;
  request(url).pipe(res);
});

module.exports = router;
