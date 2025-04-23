const path = require('path');
console.log('Caminho absoluto do controller:', path.resolve(__dirname, '../controllers/servicosController'));
const express = require('express');
const router = express.Router();
const controller = require('../controllers/servicosController');

// Exemplo de rota: /api/servicos/caps/casa amarela
router.get('/:tipo/:bairro', controller.buscarPorTipoEBairro);

module.exports = router;
