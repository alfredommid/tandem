const express = require('express');
const router = express.Router();
const pendienteController = require('../controllers/pendienteController');
const authAfiliado = require('../middleware/authAfiliado');
const { check } = require('express-validator');

//Publicaciones usuario tandem/afiliados
router.post('/crear/:id', authAfiliado, pendienteController.crearPendiente);
router.get('/confirmado', authAfiliado, pendienteController.obtenerPendientes);
router.get('/confirmado/:id', authAfiliado, pendienteController.obtenerPendienteId);


module.exports = router;