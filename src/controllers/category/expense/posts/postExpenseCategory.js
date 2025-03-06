require('../../../../db.js');
const ExpenseCategory = require('../../../../models/ExpenseCategory.js');

const postExpenseCategoryCtrl = async (name) => {
  
    const category = {
      name
    };

    const newCategory = await ExpenseCategory.create(category);

    return newCategory;
};

module.exports = postExpenseCategoryCtrl;