const express = require('express');
const cors = require('cors');
const app = express();

const servicosRoutes = require('./routes/servicos');

// Configuração do CORS
app.use(cors({
  origin: 'uphonious-frangipane-8a69d7.netlify.app', // Substitua pelo endereço do seu front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use('/api/servicos', servicosRoutes);

app.get('/', (req, res) => {
  res.send('API Saúde Recife está no ar!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

