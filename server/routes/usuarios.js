//Users routes
const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');
const authAfiliado = require('../middleware/authAfiliado');

//Create user /tandem/usuarios

router.post('/', [
    check('nombre', 'El nombre es obligaotio').not().isEmpty(),
    check('apellido', 'Apellido Obligatorio').not().isEmpty(),
    check('correo', 'Agrega un correo válido').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({min:6}),
    check('telefono', 'El telefono debe de ser de 10 dígitos').isLength({min:10, max:10})
] ,usuarioController.crearUsuario);

router.get('/:id',authAfiliado, usuarioController.obtenerUsuarioId)

module.exports = router;
