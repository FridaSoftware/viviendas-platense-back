const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clientCounterSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, default: 0 }
});

const ClientCounter = model('ClientCounter', clientCounterSchema);

module.exports = ClientCounter;