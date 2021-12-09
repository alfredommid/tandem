//User auth routes
const express = require('express')
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

//Iniciar Sesión Usuario tandem/auth

router.post('/', [
    check('correo', 'Agrega un correo válido').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({min:6})
] , authController.authUsuario);

//Obtiene usuario autenticado
router.get('/', auth, authController.usuarioAutenticado)

module.exports = router;