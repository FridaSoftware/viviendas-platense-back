require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const getIncomeCategoriesCtrl = async () => {
        const categories = await IncomeCategory.find()
    
        return categories;
};

module.exports = getIncomeCategoriesCtrl;