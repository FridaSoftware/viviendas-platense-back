require('../../../../db.js');
const ExpenseCategory = require('../../../../models/ExpenseCategory.js');

const getActiveCategoriesCtrl = async () => {
    const activeCategories = await ExpenseCategory.find({active: true});

    return activeCategories;
};

module.exports = getActiveCategoriesCtrl;