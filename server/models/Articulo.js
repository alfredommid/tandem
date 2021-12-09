const mongoose = require('mongoose');

const ArticuloSchema = mongoose.Schema({
    tipoEntrada:{
        type: String,
        required: true,
        trim: true
    },
    marca:{
        type: String,
        required: true,
        trim: true
    },
    year:{
        type: Number,
        required: true,
        trim: true
    },
    modelo:{
        type: String,
        required: true,
        trim: true
    },
    talla:{
        type: String,
        required: true,
        trim: true
    },
    color:{
        type: String,
        required: true,
        trim: true
    },
    tipoBicicleta:{
        type: String,
        required: true,
        trim: true
    },
    afiliadoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Afiliado'
    },
    usuarioId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    creado:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Articulo', ArticuloSchema);