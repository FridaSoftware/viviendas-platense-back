const { Schema } = require('mongoose');
const { validateDateFormat } = require('../../utils/validateUtils.js');

const paymentSchema = new Schema({
    dueDate: { // Fecha de vencimiento o fecha programada de pago
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        },
        
    },

    paidDate: { // Fecha en la que se realizó el pago
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD/MM/YYYY'
        },
        default: null
    },

    amountWithoutLateFee: { // Total sin punitoria
        type: Number
    },

    finalAmount: { // Total final, si hay punitoria se le suma
        type: Number
    },

    lateFee: { // Monto de la punitoria
        type: Number
    },

    currency: {
        type: String,
        enum: ["Dólares", "Pesos"]
    },

    paymentMethod: {
        type: String
    },

    isPaid: {
        type: Boolean,
        default: false
    },

    description: {
        type: String
    }
});

module.exports = paymentSchema;
