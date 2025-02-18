const { Schema } = require('mongoose');

const personalDataSchema = new Schema({

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
        type: String
    }
});

module.exports = personalDataSchema;