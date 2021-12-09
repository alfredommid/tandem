const Articulo = require('../models/Articulo');
const { validationResult } = require('express-validator');
const { model } = require('mongoose');

exports.crearArticulo = async(req, res) => {

    //Check the validation result // If errors
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        //Crear nueva publicación
        const articulo = new Articulo({
            tipoEntrada: req.body.tipoEntrada,
            marca: req.body.marca,
            year: req.body.year,
            modelo: req.body.modelo,
            talla: req.body.talla,
            color: req.body.color,
            tipoBicicleta: req.body.tipoBicicleta,
            afiliadoId: req.body.afiliadoId
        });
        //Asignar el usuario con jwt
        articulo.usuarioId = req.usuario.id;

        //Guardar articulo
        articulo.save();
        res.status(200).json(articulo);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'});
    }
}

//Resultado de articulos por ususario
exports.obtenerArticulos = async(req, res) => {
    try {
        const articulos = await Articulo.find({usuarioId : req.usuario.id});
        res.json({ articulos });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'})
    }
}

//Resultado de un artículo por Id
exports.obtenerArticuloId = async(req, res) => {
    try {
        let articulo = await Articulo.findById(req.params.id)
        if(!articulo){
            return res.status(404).json({msg : 'Artículo no encontrado'})
        }
        res.json({ articulo });
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'No se pudo encontrar el Artículo'})
    }
}

//Actualizar un proyecto
exports.actualizarArticulo = async(req, res) => {
    try {
        //Check the validation result // If errors
        const errores = validationResult(req);
        if(!errores.isEmpty()){
            return res.status(400).json({errores: errores.array()})
        }
        //Obtener la información del artículo
        const {tipoEntrada, marca, year, modelo, talla, color, tipoBicicleta} = req.body;
        const nuevoArticulo = {};

        if(tipoEntrada){nuevoArticulo.tipoEntrada = tipoEntrada}
        if(marca){nuevoArticulo.marca = marca}
        if(year){nuevoArticulo.year = year}
        if(modelo){nuevoArticulo.modelo = modelo}
        if(talla){nuevoArticulo.talla = talla}
        if(color){nuevoArticulo.color = color}
        if(tipoBicicleta){nuevoArticulo.tipoBicicleta = tipoBicicleta}

        //---------------------- Actualizar info --------------------

        try {
            //TODO Obtener id
            let articulo = await Articulo.findById(req.params.id);

            //TODO Verificar si el artículo existe
            if(!articulo){
                return res.status(404).json({msg : 'Artículo no encontrado'})
            }

            //TODO Verificar que sea el mismo creador
            if(articulo.usuarioId.toString() !== req.usuario.id){
                return res.status(401).json({msg: 'No autorizado'})
            }

            //TODO Actualizar el artículo
            articulo = await Articulo.findOneAndUpdate({_id: req.params.id}, {$set: nuevoArticulo}, {new: true});
            res.json({articulo});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: 'Hubo un error en el servidor'});
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Hubo un error'});
    }
}

//Eliminar un artículo
exports.eliminarArticulo = async(req, res) => {
    try {
        //TODO Obtener id
        let articulo = await Articulo.findById(req.params.id);
        console.log(articulo);

        //TODO Verificar si el artículo existe
        if(!articulo){
            return res.status(404).json({msg : 'Artículo no encontrado'})
        }

        //TODO Verificar que sea el mismo creador
        if(articulo.creador.toString() !== req.usuario.id){
            return res.status(401).json({msg: 'No autorizado'})
        }

        //Eliminar proyecto
        await Articulo.findOneAndRemove({ _id : req.params.id});
        res.status(200).json({msg: 'Artículo Eliminado'});

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg : 'Error en el Servidor' })
    }
}