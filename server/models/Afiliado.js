const mongoose = require('mongoose');

const AfiliadoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    correo:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    telefono:{
        type: String,
        required: true,
        trim: true
    },
    ciudad:{
        type: String,
        required: true,
        default: 'Querétaro'
    },
    colonia:{
        type: String,
        required: true,
        trim: true
    },
    cp:{
        type: String,
        required: true,
        trim: true
    },
    calleNo:{
        type: String,
        required: true,
        trim: true
    },
    tipo:{
        type: String,
        required: true,
        default: 'Afiliado'
    },
    registro:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Afiliado', AfiliadoSchema)