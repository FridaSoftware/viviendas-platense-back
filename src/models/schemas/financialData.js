const { Schema } = require('mongoose');
const paymentSchema = require('./paymentSchema.js');
const { validateDateFormat } = require('../../utils/validateUtils.js');

const financialDataSchema = new Schema({

    vendor: { // Proveedor
        cost: {
            type: Number
        },

        amountPaid: {
            type: Number
        },

        remaining:{
            type: Number
        }
    },

    totalCost: { // Costo total de la venta
        type: Number
    },

    downPayment: { // Seña, puede estar al crearse, puede agregarse luego o puede no estar
        type: paymentSchema
    },

    paymentPlan: {
        type: String,
        enum: ['Contado', 'Financiado']
    },

    lumpSum: { // Contado
        payments: [{ // Array de pagos, para mantener flexible la cantidad de pagos que se pueden estipular en el contrato
            type: paymentSchema
        }]
    },

    financed: { // Financiado
        firstPayments: [{ // Anticipos, en un array porque a veces hay más de uno estipulado en el contrato
            type: paymentSchema
        }],

        installments:{ // Cuotas

            startDate: { // Fecha en que comienzan a abonarse
                type: String,
                validate: {
                    validator: validateDateFormat,
                    message: 'Invalid date format. Expected format: DD-MM-YYYY'
                }
            },

            quantity: { // Cantidad
                type: Number
            },

            payments: [{ // Cuotas en sí mismas
                type: paymentSchema
            }]
        }
    }
});

module.exports = financialDataSchema;