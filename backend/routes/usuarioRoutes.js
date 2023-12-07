const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para el registro de usuarios
router.post('/registro', usuarioController.registrarUsuario);

module.exports = router;
