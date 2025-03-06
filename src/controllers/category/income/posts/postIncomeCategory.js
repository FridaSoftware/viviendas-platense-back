require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const postIncomeCategoryCtrl = async (name) => {
  
    const category = {
      name
    };

    const newCategory = await IncomeCategory.create(category);

    return newCategory;
};

module.exports = postIncomeCategoryCtrl;