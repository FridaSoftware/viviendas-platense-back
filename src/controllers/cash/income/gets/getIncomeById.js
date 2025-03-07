require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getIncomeByIdCtrl = async (_id) => {

    if(_id) {
        const incomeById = await Income.findOne({ _id })
        .populate('category', 'name');

        return incomeById;
    };

};

module.exports = getIncomeByIdCtrl;