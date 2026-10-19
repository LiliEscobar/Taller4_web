const { Router } = require('express');

const router = Router();

// Ruta inicial /api
router.get('/', (req, res) => {
  res.json({ message: 'API REST con Express' });
});

// Ruta /api/health
router.get('/health', (req, res) => {
  res.json({ message: 'El API está funcionando correctamente.' });
});


router.get('/info', (req, res) => {
  res.json({
    status: 'success',
    data: {
      integrantes: [
        {
          nombre: 'Gael Alexander Martínez Alas',
          edad: 21,
          carrera: 'Ingeniería en Computación',
          materiasAprobadas: 12
        }
      ]
    }
  });
});

module.exports = router;