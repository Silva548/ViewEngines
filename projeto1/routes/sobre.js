var express = require('express');
var router = express.Router();

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { 
    title: 'Sobre o Incidente',
    description: 'Relatório confidencial sobre o vazamento do T-Virus.' 
  });
});

module.exports = router;
