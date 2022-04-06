//Users routes
const express = require('express')
const router = express.Router();
const afiliadoController = require('../controllers/afiliadoController');
const {check} = require('express-validator');
const authController = require('../controllers/authController');
const authAfiliado = require('../middleware/authAfiliado');
const auth = require('../middleware/auth');


//Create user /tandem/afiliados

//Sign Up
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'Agrega un correo válido').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({min:6}),
    check('telefono', 'El teléfono debe de ser 10 números').isLength({min:10}),
    check('colonia', 'La colonia es obligatoria').not().isEmpty(),
    check('cp', 'El CP es obligatorio').isLength({min:5}),
    check('calleNo', 'La calle y número son obligatorios').not().isEmpty()
] ,afiliadoController.crearAfiliado);

//Login
router.post('/login', [
    check('correo', 'Agrega un correo válido').isEmail(),
    check('password', 'El password debe de ser mínimo de 6 caracteres').isLength({min:6})
] , afiliadoController.authAfiliado);

//Actualizar Info
router.put('/:id', authAfiliado, [
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('correo', 'Agrega un correo válido').isEmail(),
    check('telefono', 'El teléfono debe de ser 10 números').isLength({min:10}),
    check('colonia', 'El campo colonia es obligatorio').not().isEmpty(),
    check('cp', 'El campo cp es obligatorio').isLength({min:5}),
    check('calleNo', 'La calle y número son obligatorios').not().isEmpty()
], afiliadoController.actAfiliado);

//Info afiliado
router.get('/login', authAfiliado, authController.afiliadoAutenticado)

//Lista completa de Afiliados
router.get('/', auth, afiliadoController.obtenerAfiliados);

//Artículos asignados a Afiliado
router.get('/perfil', authAfiliado, afiliadoController.obtenerArticulos);

//Afiliado por Id
router.get('/:id', auth, afiliadoController.obtenerAfiliadoId);

module.exports = router;