const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')

exports.crearUsuario = async (req,res) => {
    //check for errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    const { correo, password} = req.body;

    try {
        //check for a unique user

        let usuario= await Usuario.findOne({ correo })
        if(usuario){
            return res.status(400).json({msg: 'El usuario ya existe'})
        }
        //creates new user
        usuario = new Usuario(req.body);

        //Password hash
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password, salt);

        //saves new user
        await usuario.save()

        //create and sign jwt
        const payload = {
            usuario:{
                id: usuario.id,
                tipo: usuario.tipo
            }
        };

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: '8h'
        }, (error, token) => {
            if(error) throw error;

            //confirmation message
            res.status(200).json({ token });
        })

        
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg : 'Hubo un error' });
    }
}