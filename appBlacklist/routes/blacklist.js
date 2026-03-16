const express = require('express');
const router = express.Router();

// Rota Principal: /blacklist
router.get('/', (req, res) => {
  res.render('ranking', { 
    posicao: '#15', 
    rival: 'Ho "Sonny" Seun',
    carro: 'Volkswagen Golf GTI',
    status: 'PROCURADO pela Polícia de Rockport' 
  });
});

// Sub-rota 1: /blacklist/garage
router.get('/garage', (req, res) => {
  res.render('garage', { 
    meuCarro: 'BMW M3 GTR (E46)',
    nitro: 'Nível 3',
    estilo: 'Vinil das Chamas'
  });
});

// Sub-rota 2: /blacklist/bounty
router.get('/bounty', (req, res) => {
  res.render('wanted', { 
    recompensa: '500,000',
    infringimentos: 'Excesso de Velocidade, Direção Imprudente'
  });
});

module.exports = router;
