require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getIncomeByDescription = async (string) => {

    if(string) {
        const income = await Income.findOne({ description: string })

        return income;
    };

};

module.exports = getIncomeByDescription;