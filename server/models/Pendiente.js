const mongoose = require('mongoose');

const ArticuloSchema = mongoose.Schema({
    articuloId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Articulo'
    },
    afiliadoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Afiliado'
    },
    registro:{
        type: Date,
        default: Date.now()
    },
    estatus:{
        type: String,
        default: 'Aceptado'
    }
})

module.exports = mongoose.model('Pendiente', ArticuloSchema);