const express = require('express');
const veiculoController = require('../controllers/veiculoController');

const router = express.Router();

router.get('/veiculo', veiculoController.getAllVeiculos);
router.post('/veiculo', veiculoController.createVeiculo);
router.put('/veiculo/:id', veiculoController.updateVeiculo)
router.delete('/veiculo/:id', veiculoController.deleteVeiculo);

module.exports = router;