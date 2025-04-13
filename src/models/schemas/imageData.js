const { Schema } = require('mongoose');

const imageSchema = new Schema({

    image: {
        type: String
    },

    name: {
        type: String
    },

    description: {
        type: String
    }
});

module.exports = imageSchema;
