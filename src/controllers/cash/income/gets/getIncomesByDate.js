require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getIncomesByDateCtrl = async (start, end) => {
    
    const startDate = new Date(`${start}T00:00:00.000Z`);
    const endDate = new Date(`${end}T23:59:59.999Z`);

    const incomes = await Income.find({
        date: { $gte: startDate, $lte: endDate },
    })
    .populate('category', 'name');

    return incomes;
};

module.exports = getIncomesByDateCtrl;