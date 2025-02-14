const { Schema } = require('mongoose');
const { validateDateFormat } = require('../../utils/validateUtils.js');

const projectDataScheme = new Schema({
    model:{
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

    items: [{
        quantity:{
            type: Number,
            default: 0
        },
        description: {
            type: String
        },
        price:{
            type: Number
        }
    }],

    areas: [{
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

    sqm: {
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

    extraItems: [{

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

    turnKey: {
        type: Boolean,
        default: false
    },
});

module.exports = projectDataScheme;