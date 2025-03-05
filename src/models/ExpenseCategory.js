const { Schema, model } = require('mongoose');

const expenseCategorySchema = new Schema({
    name: { 
        type: String,
        required: true
    },

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = model('ExpenseCategory', expenseCategorySchema);