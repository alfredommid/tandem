const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const Articulo = require('../models/Articulo');

//Publicaciones usuario tandem/articulos
router.post('/', auth,
[
    check('tipoEntrada', 'El campo tipoEntrada es obligatorio').not().isEmpty(),
    check('marca', 'El campo marca es obligatorio').not().isEmpty(),
    check('year', 'El campo year es obligatorio').not().isEmpty(),
    check('modelo', 'El campo modelo es obligatorio').not().isEmpty(),
    check('talla', 'El campo talla es obligatorio').not().isEmpty(),
    check('color', 'El campo color es obligatorio').not().isEmpty(),
    check('tipoBicicleta', 'El campo tipoBicicleta es obligatorio').not().isEmpty(),
    check('afiliadoId', 'El campo afiliado es obligatorio').not().isEmpty(),
    check('hora', 'El campo hora es obligatorio').not().isEmpty(),
    check('fecha', 'El campo fecha es obligatorio').not().isEmpty(),
], articuloController.crearArticulo);

//Obtener todos los artículos por usuario
router.get('/', auth, articuloController.obtenerArticulos);

//Obtener artículo en específico
router.get('/:id', auth, articuloController.obtenerArticuloId);

//Editar artículo por id
router.put('/:id', auth,
[
    check('tipoEntrada', 'El campo tipoEntrada es obligatorio').not().isEmpty(),
    check('marca', 'El campo marca es obligatorio').not().isEmpty(),
    check('year', 'El campo year es obligatorio').not().isEmpty(),
    check('modelo', 'El campo modelo es obligatorio').not().isEmpty(),
    check('talla', 'El campo talla es obligatorio').not().isEmpty(),
    check('color', 'El campo color es obligatorio').not().isEmpty(),
    check('tipoBicicleta', 'El campo tipoBicicleta es obligatorio').not().isEmpty(),
    check('afiliadoId', 'El campo afiliado es obligatorio').not().isEmpty(),
    check('hora', 'El campo hora es obligatorio').not().isEmpty(),
    check('fecha', 'El campo fecha es obligatorio').not().isEmpty(),
], articuloController.actualizarArticulo);

//Eliminar artículo
router.delete('/:id', auth, articuloController.eliminarArticulo);

module.exports = router;