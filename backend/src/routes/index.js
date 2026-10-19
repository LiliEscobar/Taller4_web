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
    message: 'El API está funcionando correctamente.',
    data: [
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
    ],
  });
});

module.exports = router;
