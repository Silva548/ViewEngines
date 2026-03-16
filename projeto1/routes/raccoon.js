const express = require('express');
const router = express.Router();

// Rota Principal: /raccoon
router.get('/', (req, res) => {
  res.render('city', { 
    title: 'Status: Raccoon City', 
    status: 'INFECTADO',
    virus: 'T-Virus' 
  });
});

// Sub-rota 1: /raccoon/police
router.get('/police', (req, res) => {
  res.render('rpd', { 
    location: 'R.P.D. Station',
    officer: 'Leon S. Kennedy',
    objective: 'Encontrar sobreviventes'
  });
});

// Sub-rota 2: /raccoon/lab
router.get('/lab', (req, res) => {
  res.render('nest', { 
    location: 'Laboratório NEST',
    alert: 'Protocolo de Auto-destruição Ativado!'
  });
});

module.exports = router;
