const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')

exports.authUsuario = async(req,res) => {
    //check for errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //get the mail and password
    const { correo, password } = req.body;
    try {
        //--------------revisar que exista el correo--------------
        let usuario = await Usuario.findOne({ correo });
        if(!usuario){
            return res.status(400).json({msg: 'Correo no registrado'});
        }

        //--------------revisar contraseña--------------
        const psswdFound = await bcrypt.compare(password, usuario.password)
        if(!psswdFound){
            return res.status(400).json({msg: 'Contraseña Incorrecta'})
        }

        //--------------Si todo es correcto crear y devolver token--------------
        const payload = {
            usuario:{
                id: usuario.id,
                tipo: usuario.tipo
            }
        };

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: '24h'
        }, (error, token) => {
            if(error) throw error;

            //msg confirmación
            res.status(200).json({ token });
        })
    } catch (error) {
        console.log(error)
    }
}

//Obtiene el usuario autenticado
exports.usuarioAutenticado = async(req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.status(200).json({usuario})
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Hubo un error' });
    }
}