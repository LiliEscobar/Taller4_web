const express = require('express');

const app = express();
const PORT = 3005;

// Permite recibir datos JSON.
app.use(express.json());

// Ruta inicial de la API.
app.get('/api', (req, res) => {
  res.json({ message: 'API REST con Express' });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/api`);
});
