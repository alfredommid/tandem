const Valorado = require('../models/Valorado');
const { validationResult } = require('express-validator');
const { model } = require('mongoose');

exports.crearValorado = async(req, res) => {

    //Check the validation result // If errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        //Crear nueva publicación
        const valorado = new Valorado({
            tipoEntrada: req.body.tipoEntrada,
            marca: req.body.marca,
            year: req.body.year,
            modelo: req.body.modelo,
            talla: req.body.talla,
            color: req.body.color,
            tipoBicicleta: req.body.tipoBicicleta,
            transmision: req.body.transmision,
            cassette: req.body.cassette,
            cuadro: req.body.cuadro,
            tijera: req.body.tijera,
            tipoLlantas: req.body.tipoLlantas,
            marcaLlantas: req.body.marcaLlantas,
            peso: req.body.peso,
            observaciones: req.body.observaciones,
            calificacion: req.body.calificacion,
            precio: req.body.precio,
            pendienteId: req.params.id
        });

        //Afiliado ya viene asignado en el pending
        valorado.afiliadoId = req.afiliado.id
        //Guardar valorado
        valorado.save();
        res.status(200).json(valorado);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

exports.obtenerValorados = async(req, res) => {
    try {
        const valorados = await Valorado.find();
        res.json({ valorados });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'})
    }
}

exports.obtenerValoradoId = async(req, res) => {
    try {
        const valorado = await Valorado.findById(req.params.id);
        if(!valorado){
            res.json({msg: 'No se encuentra el Artículo'})
        }
        res.json({ valorado });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'})
    }
}

exports.actualizarValorado = async(req, res) => {
    try {
        //Check the validation result // If errors
        const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.status(400).json({errores: errores.array()})
        }
        //Obtener la información del artículo
        const {tipoEntrada, marca, year, modelo, talla, color, tipoBicicleta, transmision, cassette, cuadro, tijera, tipoLlantas, marcaLlantas, peso, observaciones, calificacion, precio} = req.body;
        const nuevoValorado = {};

        if(tipoEntrada){nuevoValorado.tipoEntrada = tipoEntrada}
        if(marca){nuevoValorado.marca = marca}
        if(year){nuevoValorado.year = year}
        if(modelo){nuevoValorado.modelo = modelo}
        if(talla){nuevoValorado.talla = talla}
        if(color){nuevoValorado.color = color}
        if(tipoBicicleta){nuevoValorado.tipoBicicleta = tipoBicicleta}
        if(transmision){nuevoValorado.transmision = transmision}
        if(cassette){nuevoValorado.cassette = cassette}
        if(cuadro){nuevoValorado.cuadro = cuadro}
        if(tijera){nuevoValorado.tijera = tijera}
        if(tipoLlantas){nuevoValorado.tipoLlantas = tipoLlantas}
        if(marcaLlantas){nuevoValorado.marcaLlantas = marcaLlantas}
        if(peso){nuevoValorado.peso = peso}
        if(observaciones){nuevoValorado.observaciones = observaciones}
        if(calificacion){nuevoValorado.calificacion = calificacion}
        if(precio){nuevoValorado.precio = precio}

        //---------------------- Actualizar info --------------------

        try {
            //Obtener id
            let valorado = await Valorado.findById(req.params.id);
            console.log(valorado);

            //Verificar si el artículo existe
            if(!valorado){
                return res.status(404).json({msg : 'Ocurrió un error'})
            }

            //TODO Verificar que haya pasado por Pendiente
            if(!valorado.pendienteId){
                return res.status(401).json({msg: 'Ocurrió un problema'})
            }

            //TODO Verificar que sea el mismo afiliado
            if(valorado.afiliadoId.toString() !== req.afiliado.id){
                return res.status(401).json({msg: 'No autorizado'})
            }

            //Actualizar el artículo
            valorado = await Valorado.findOneAndUpdate({_id: req.params.id}, {$set: nuevoValorado}, {new: true});
            res.json({valorado});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Hubo un error en el servidor'});
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Hubo un error'});
    }
}
