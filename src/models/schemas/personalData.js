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

    normalizedName: {
        type: String
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

personalDataSchema.pre('save', function (next) {
    if (this.name) {
        this.normalizedName = this.name.normalize('NFD').replace(/[̀-ͯ]/g, '');
    }
    next();
});

module.exports = personalDataSchema;