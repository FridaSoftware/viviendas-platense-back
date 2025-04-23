require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getActiveIncomesCtrl = async () => {
    const activeIncomes = await Income.find({active: true})
    .populate('category', 'name')
    .sort({ createdAt: -1 });

    return activeIncomes;
};

module.exports = getActiveIncomesCtrl;