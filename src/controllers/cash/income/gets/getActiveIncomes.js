require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getActiveIncomesCtrl = async () => {
    const activeIncomes = await Income.find({active: true}).populate('category', 'name');

    return activeIncomes;
};

module.exports = getActiveIncomesCtrl;