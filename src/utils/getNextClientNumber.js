const ClientCounter = require('./clientCounter.js');

async function getNextClientNumber() {
    const clientCounter = await ClientCounter.findOneAndUpdate(
        { name: 'number' },
        { $inc: { value: 1 } },
        { new: true, upsert: true }
    );
    return clientCounter.value.toString().padStart(7, '0');
}

module.exports = getNextClientNumber;