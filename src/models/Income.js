const { Schema, model } = require('mongoose');
const { validateDateFormat } = require('../utils/validateUtils.js');

const incomeSchema = new Schema({
    date: { 
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        },
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    currency: { 
        type: String, 
        enum: ['ARS', 'USD'], // Limita a dos opciones: ARS o USD
        required: true 
    },

    paymentMethod: { 
        type: String,
        required: true
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'IncomeCategory',
        default: null
    },

    description: { 
        type: String
    },

    fromClient: {
        type: Boolean,
        default: false
    },

    active: {
        type: Boolean,
        default: true
    }
    
}, { timestamps: true }); // Genera los campos createdAt y updatedAt que devuelven la fecha de creación y de la última actualización de la entrada en la db


module.exports = model('Income', incomeSchema);