const Pendiente = require('../models/Pendiente');
const { validationResult } = require('express-validator');
const { model } = require('mongoose');

exports.crearPendiente = async(req, res) => {

    //Check the validation result // If errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        //Crear nueva celda de Pendiente
        console.log(req.afiliado)
        const pendiente = new Pendiente({
            articuloId: req.params.id
        })

        /*//Asignar el itemId pro medio de params
        pendiente.itemId = req.params.id;*/
        //Asignar el afiliado con jwt
        pendiente.afiliadoId = req.afiliado.id;

        //Guardar pendiente
        pendiente.save();
        res.status(200).json(pendiente);

        //TODO Una vez terminada la publicación a la tabla se podría borrar de la tabla de artículos
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

//Resultado de pendientes por afiliado
exports.obtenerPendientes = async(req, res) => {
    try {
        const pendientes = await Pendiente.find({afiliadoId : req.afiliado.id});
        res.json({ pendientes });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'})
    }
}

//Resultado de un artículo por Id
exports.obtenerPendienteId = async(req, res) => {
    try {
        let pendiente = await Pendiente.findById(req.params.id);
        if(!pendiente){
            return res.status(404).json({msg : 'Artículo no encontrado'})
        }
        res.json({ pendiente });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'No se pudo encontrar el Artículo'})
    }
}