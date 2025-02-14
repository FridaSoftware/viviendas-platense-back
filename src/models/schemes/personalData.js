const { Schema } = require('mongoose');

const personalDataScheme = new Schema({

    dni: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    }
});

module.exports = personalDataScheme;