const { Schema, model } = require('mongoose');

const incomeCategorySchema = new Schema({
    name: { 
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('IncomeCategory', incomeCategorySchema);