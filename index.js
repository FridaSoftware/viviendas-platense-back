require('dotenv').config();
const connection = require('./src/db.js')
const server = require('./src/app.js');

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('listening at 3001'); 
}); 

connection();