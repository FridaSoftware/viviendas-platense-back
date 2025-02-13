const { Schema, model } = require('mongoose');
const personalDataScheme = require('./schemes/personalData.js');
const projectDataScheme = require('./scheme/projectData.js');
const financialDataScheme = require('./scheme/financialDataScheme.js');
const { validateDateFormat } = require('../utils/validateUtils.js');

const clientSchema = new Schema({
    number: {
        type: Number
    },

    state: {
        type: String,
        enum: ['inProgress', 'Completed', 'Suspended'],
        default: 'inProgress'
    },

    saleDate:{
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD-MM-YYYY'
        }
    },

    handoverDate:{
        type: String,
        validate: {
            validator: validateDateFormat,
            message: 'Invalid date format. Expected format: DD-MM-YYYY'
        }
    },

    contractSigned: {
        type: Boolean,
        default: false
    },

    personalData: {
        type: personalDataScheme,
        required: true
    },

    projectData: {
        type: projectDataScheme,
        required: true
    },

    financialData: {
        type: financialDataScheme,
        require: true
    }
});

module.exports = model('Client', clientSchema);