//Users routes
const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const {check} = require('express-validator');

//Create user /tandem/usuarios

router.post('/', [
    check('nombre', 'El nombre es obligaotio').not().isEmpty(),
    check('apellido', 'Apellido Obligatorio').not().isEmpty(),
    check('correo', 'Agrega un correo válido').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({min:6})
] ,usuarioController.crearUsuario);

module.exports = router;
