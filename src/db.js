require('dotenv').config();
const mongoose = require('mongoose');
const URI_MONGODB = process.env.URI_MONGODB;

const connection = async () => {
    try {
        await mongoose.connect(URI_MONGODB, {
        
        });
        console.log('DB listen');
    } catch (err) {
        console.error('Error al conectar a MongoDB. ERROR:', err);
    }
}

module.exports = connection;