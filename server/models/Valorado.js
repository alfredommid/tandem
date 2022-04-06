const mongoose = require('mongoose');

const ValoradoSchema = mongoose.Schema({
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
    transmision:{
        type: String,
        required: true,
        trim: true
    },
    cassette:{
        type: String,
        required: false,
        trim: true
    },
    cuadro:{
        type: String,
        required: true,
        trim: true
    },
    tijera:{
        type: String,
        required: true,
        trim: true
    },
    tipoLlantas:{
        type: String,
        required: true,
        trim: true
    },
    marcaLlantas:{
        type: String,
        required: false,
        trim: true
    },
    peso:{
        type: String,
        required: false,
        trim: true
    },
    observaciones:{
        type: String,
        required: true,
        trim: true
    },
    calificacion:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: String,
        required: true,
        trim: true
    },
    estatus:{
        type: String,
        default: 'Valorado'
    },
    pendienteId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pendiente'
    },
    afiliadoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Afiliado'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Valorado', ValoradoSchema);