const { Schema, model } = require('mongoose');

const clientCounterSchema = new Schema ({
    name: { type: String, requird: true, unique: true },
    value: { type: Number, default: 0 }
});

module.exports = model('ClientCounter', clientCounterSchema);