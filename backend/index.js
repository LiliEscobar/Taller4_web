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

app.get('/api/info', (req, res) => {
  // Datos de los integrantes del taller.
  const members = [
    {
      id: 1,
      name: 'Lilian Sofia Escobar Salazar',
      age: 20,
      career: 'Ingeniería Informática',
      approvedSubjects: 18,
    },
    {
      id: 2,
      name: 'Gael Alexander Martínez Alas',
      age: 21,
      career: 'Ingeniería en Computación',
      approvedSubjects: 12,
    },
  ];

  res.json({
    status: 'success',
    message: 'El API está funcionando correctamente.',
    data: members,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/api`);
});
