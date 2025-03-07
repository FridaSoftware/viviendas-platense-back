require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const putExpenseStatusCtrl = async (_id) => {

    const income = await Income.findById(_id);
    const newStatus = !income.active;

    const updatedStatus = await Income.updateOne(
        {_id}, {$set: {active: newStatus}}
    );

    return updatedStatus;
};

module.exports = putExpenseStatusCtrl;