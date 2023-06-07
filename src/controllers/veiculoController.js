const Veiculo = require('../models/veiculo');

exports.getAllVeiculos = async (req, res) => {
  try {
    const veiculo = await Veiculo.find();
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler veiculos' });
  }
};

exports.createVeiculo= async (req, res) => {
  try {
    const { placa, chassi, renavam, modelo, marca, ano } = req.body;
    const veiculo = await Veiculo.create({ placa, chassi, renavam, modelo, marca, ano });
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar veiculo' });
  }
};

exports.updateVeiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { placa, chassi, renavam, modelo, marca, ano } = req.body;
    const veiculo = await Veiculo.findByIdAndUpdate(id, { placa, chassi, renavam, modelo, marca, ano } );
    
    res.status(200).json({message: "Veiculo atualizado com sucesso!"});
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar veiculo' });
  }
};

exports.deleteVeiculo = async (req, res) => {
    try {
      const { id } = req.params;
      const veiculo = await Veiculo.findByIdAndDelete(id);
      
      if (!veiculo) {
        return res.status(404).json({ error: 'Veiculo not found' });
      }
  
      res.json({ message: 'Participante deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar veiculo' });
    }
};