require('../../../../db.js');
const ExpenseCategory = require('../../../../models/ExpenseCategory.js');

const getExpenseCategoriesCtrl = async () => {
        const categories = await ExpenseCategory.find()
        // .populate('vehicles')
    
        return categories;
};

module.exports = getExpenseCategoriesCtrl;