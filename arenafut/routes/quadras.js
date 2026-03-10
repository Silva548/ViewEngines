var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/quadras', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/agendamentos', function(req, res, next) {
   res.render('sobre', { title: 'agendamentods' });
});

module.exports = router;