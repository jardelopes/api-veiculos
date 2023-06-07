const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
  placa: { type: String, required: true },
  chassi: { type: String, required: true },
  renavam: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: true },
  ano: { type: Number, required: true }
});

module.exports = mongoose.model('Veiculo', veiculoSchema);