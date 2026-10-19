const express = require('express');
const cors = require('cors');
const routes = require('./routes');

function createApp() {
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Montar las rutas
  app.use('/api', routes);

  // Manejador global de errores (opcional pero recomendado)
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      status: 'error',
      message: error.message || 'Ocurrió un error inesperado.',
    });
  });

  return app;
}

module.exports = createApp;