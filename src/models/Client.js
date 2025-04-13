const { Schema, model } = require('mongoose');
const personalDataSchema = require('./schemas/personalData.js');
const projectDataSchema = require('./schemas/projectData.js');
const financialDataSchema = require('./schemas/financialData.js');
const imageDataSchema = require('./schemas/imageData.js');
const { validateDateFormat } = require('../utils/validateUtils.js');
const getNextClientNumber = require('../utils/getNextClientNumber.js');

const clientSchema = new Schema({
    number: {
        type: String,
        unique: true
    },

    state: {
        type: String,
        enum: ['En progreso', 'Completado', 'Suspendido'],
        default: 'En progreso'
    },

    saleDate:{ // La fecha de la venta
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        }
    },

    handoverDate:{ // Fecha de entrega
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        }
    },

    contractDate: { // La fecha que figura en el contrato
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        }
    },

    contractSigned: {
        type: Boolean,
        default: false
    },

    personalData: {
        type: personalDataSchema
    },

    projectData: {
        type: projectDataSchema
    },

    financialData: {
        type: financialDataSchema
    },

    imageData: {
        type: [imageDataSchema],
        default: []
    },

    other: { // Espacio para anotaciones
        type: String
    },

    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true }); // Genera los campos createdAt y updatedAt que devuelven la fecha de creación y de la última actualización de la entrada en la db

// Middleware para generar un número único antes de guardar

clientSchema.pre('save', async function(next) {
    if (!this.number) {
        try {
            this.number = await getNextClientNumber();
            if (!this.number) {
                throw new Error('Failed to generate number');
            }
        } catch (error) {
            return next(error);
        }
    }
    next();
});

module.exports = model('Client', clientSchema);