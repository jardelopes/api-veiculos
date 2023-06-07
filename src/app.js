const express = require('express');
const conn = require('./db/conn');
const bodyParser = require('body-parser');
const veiculosRoutes = require('./routes/veiculosRoutes');
const cors = require('cors');
const app = express();
const PORT = 3000; 

app.use(cors());
app.use(bodyParser.json());
conn();
app.use('/api', veiculosRoutes);

app.listen(PORT, () => {
  console.log(`Servirdor rodando na porta: ${PORT}`);
});