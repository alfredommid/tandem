const express = require('express');
const router = express.Router();
const valoradoController = require('../controllers/valoradoController');
const authAfiliado = require('../middleware/authAfiliado');
const { check } = require('express-validator');

//Publicaciones usuario tandem/displayAll
router.post('/:id', authAfiliado,
[
    check('tipoEntrada', 'El campo tipoEntrada es obligatorio').not().isEmpty(),
    check('marca', 'El campo marca es obligatorio').not().isEmpty(),
    check('year', 'El campo year es obligatorio').not().isEmpty(),
    check('modelo', 'El campo modelo es obligatorio').not().isEmpty(),
    check('talla', 'El campo talla es obligatorio').not().isEmpty(),
    check('color', 'El campo color es obligatorio').not().isEmpty(),
    check('tipoBicicleta', 'El campo tipoBicicleta es obligatorio').not().isEmpty(),
    check('transmision', 'El campo transmision es obligatorio').not().isEmpty(),
    check('cuadro', 'El campo cuadro es obligatorio').not().isEmpty(),
    check('tijera', 'El campo tijera es obligatorio').not().isEmpty(),
    check('tipoLlantas', 'El campo tipoLlantas es obligatorio').not().isEmpty(),
    check('observaciones', 'El campo observaciones es obligatorio').not().isEmpty(),
    check('precio', 'El campo precio es obligatorio').not().isEmpty()
], valoradoController.crearValorado);

//Obtener todos los artículos por usuario
router.get('/', valoradoController.obtenerValorados);

//Obtener artículo en específico
router.get('/:id', valoradoController.obtenerValoradoId);

//Editar artículo por id
router.put('/:id', authAfiliado,
[
    check('tipoEntrada', 'El campo tipoEntrada es obligatorio').not().isEmpty(),
    check('marca', 'El campo marca es obligatorio').not().isEmpty(),
    check('year', 'El campo year es obligatorio').not().isEmpty(),
    check('modelo', 'El campo modelo es obligatorio').not().isEmpty(),
    check('talla', 'El campo talla es obligatorio').not().isEmpty(),
    check('color', 'El campo color es obligatorio').not().isEmpty(),
    check('tipoBicicleta', 'El campo tipoBicicleta es obligatorio').not().isEmpty(),
    check('transmision', 'El campo transmision es obligatorio').not().isEmpty(),
    check('cassette', 'El campo cassette es obligatorio').not().isEmpty(),
    check('cuadro', 'El campo cuadro es obligatorio').not().isEmpty(),
    check('tijera', 'El campo tijera es obligatorio').not().isEmpty(),
    check('tipoLlantas', 'El campo tipoLlantas es obligatorio').not().isEmpty(),
    check('marcaLlantas', 'El campo marcaLlantas es obligatorio').not().isEmpty(),
    check('peso', 'El campo peso es obligatorio').not().isEmpty(),
    check('observaciones', 'El campo observaciones es obligatorio').not().isEmpty(),
    check('calificacion', 'El campo calificacion es obligatorio').not().isEmpty(),
    check('precio', 'El campo precio es obligatorio').not().isEmpty(),
], valoradoController.actualizarValorado);

//Eliminar artículo
//router.delete('/:id', authAfiliado, valoradoController.eliminarValorado);

module.exports = router;