require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getIncomeCtrl = async () => {
        const incomes = await Income.find()
        .populate('category');
    
        return incomes;
};

module.exports = getIncomeCtrl;