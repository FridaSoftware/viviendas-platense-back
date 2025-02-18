const { Schema } = require('mongoose');
const { validateDateFormat } = require('../../utils/validateUtils.js');

const projectDataSchema = new Schema({
    model:{ // Determina el modelo de contrato
        type: String,
        enum: ['Wood', 'Eco', 'Steel', 'Steel Premium'],
        required: true
    },

    roof:{
        type: String,
        enum: ['Americana', 'Minimalista'],
        required: true
    },

    base:{

        date: {
            type: String,
            validate: {
                validator: validateDateFormat,
                message: 'Invalid date format. Expected format: DD-MM-YYYY'
            }
        },
        state: {
            type: String,
            enum: ['Hecho', 'Sin hacer'],
            default: 'Sin hacer'
        },
        type: {
            type: String,
            enum: ['Cliente', 'Empresa', 'Losa'],
            required: true
        }
    },

    items: [{ // Ítems estipulados en el contrato, sean propios del modelo o agregados
        quantity:{
            type: Number,
            default: 0
        },
        description: {
            type: String
        },
        price:{
            type: Number
        },
        type: { // Variable para determinar si son los propios del tipo de contrato o son aparte
            type: String,
            enum: ['Normal', 'Extra']
        }
    }],

    areas: [{ // Ambientes
        name:{
            type: String,
            required: true
        },
        size1:{
            type: Number,
            required: true
        },
        size2:{
            type: Number,
            required: true
        }
    }],

    sqm: { // Metros cuadrados
        house:{
            type: Number,
            required: true
        },
        gallery:{
            type: Number
        },
        pergola:{
            type: Number
        }
    },

    extraItems: [{ // Ítems estipulados luego de la firma del contrato

        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
        price:{
            type: Number
        }
    }],

    turnKey: { // Llave en mano
        type: Boolean,
        default: false
    },
});

module.exports = projectDataSchema;