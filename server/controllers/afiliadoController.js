const Afiliado = require('../models/Afiliado');
const Articulo = require('../models/Articulo');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken')

exports.crearAfiliado = async (req,res) => {
    //check for errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    const { correo, password} = req.body;

    try {
        //check for a unique user

        let afiliado= await Afiliado.findOne({ correo })
        if(afiliado){
            return res.status(400).json({msg: 'El afiliado ya existe'})
        }
        //creates new user
        afiliado = new Afiliado(req.body);

        //Password hash
        const salt = await bcrypt.genSalt(10);
        afiliado.password = await bcrypt.hash(password, salt);

        //saves new user
        await afiliado.save()

        //create and sign jwt
        const payload = {
            afiliado:{
                id: afiliado.id,
                tipo: afiliado.tipo
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

exports.authAfiliado = async(req,res) => {
    //check for errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //get the mail and password
    const { correo, password } = req.body;
    try {
        //--------------revisar que exista el correo--------------
        let afiliado = await Afiliado.findOne({ correo });
        if(!afiliado){
            return res.status(400).json({msg: 'Correo no registrado'});
        }

        //--------------revisar contraseña--------------
        const psswdFound = await bcrypt.compare(password, afiliado.password)
        if(!psswdFound){
            return res.status(400).json({msg: 'Contraseña Incorrecta'})
        }

        //--------------Si todo es correcto crear y devolver token--------------
        const payload = {
            afiliado:{
                id: afiliado.id,
                tipo: afiliado.tipo
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
        console.log(error);
    }
}

//Obtener todos los afiliados para desplegar en la selección por parte del usaurio
exports.obtenerAfiliados = async(req, res) => {
    try {
        const afiliados = await Afiliado.find().select('-password');
        res.json({afiliados});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

//Resultado de articulos por ususario
exports.obtenerArticulos = async(req, res) => {
    try {
        const articulos = await Articulo.find({afiliadoId : req.afiliado.id});
        res.json({ articulos });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

//Obtener artículo por Id
exports.obtenerAfiliadoId = async(req,res) => {
    try {
        const afiliado = await Afiliado.findById(req.params.id).select('-password')
        res.json({afiliado})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}