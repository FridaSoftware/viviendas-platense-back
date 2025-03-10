require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const getActiveCategoriesCtrl = async () => {
    const activeCategories = await IncomeCategory.find({active: true});

    return activeCategories;
};

module.exports = getActiveCategoriesCtrl;