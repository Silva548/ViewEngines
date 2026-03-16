var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Umbrella Corp - Raccoon City Database',
    status: 'SISTEMA EM QUARENTENA',
    securityLevel: 'Nível 4'
  });
});

module.exports = router;

