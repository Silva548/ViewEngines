const express = require('express');
const router = express.Router();

// Rota Principal: /arena
router.get('/', (req, res) => {
  res.render('beystadium', { 
    torneio: 'Campeonato Mundial de Bladers', 
    status: 'BATALHA EM CURSO',
    proximaLuta: 'Pegasus vs L-Drago' 
  });
});

// Sub-rota 1: /arena/launch
router.get('/launch', (req, res) => {
  res.render('launch-pad', { 
    blader: 'Gingka Hagane',
    tipo: 'Ataque',
    potencia: '9000 RPM'
  });
});

// Sub-rota 2: /arena/parts
router.get('/parts', (req, res) => {
  res.render('workshop', { 
    peca: 'Face Bolt de Metal',
    efeito: '+5 Defesa'
  });
});

module.exports = router;
