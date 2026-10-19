const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3005;

// Permite consultar la API desde el frontend.
app.use(cors());
// Permite recibir datos JSON.
app.use(express.json());

// Ruta inicial de la API.
app.get('/api', (req, res) => {
  res.json({ message: 'API REST con Express' });
});

app.get('/api/health', (req, res) => {
  res.json({ message: 'El API está funcionando correctamente.' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/api`);
});
