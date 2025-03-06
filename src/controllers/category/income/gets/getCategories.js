require('../../../../db.js');
const IncomeCategory = require('../../../../models/IncomeCategory.js');

const getIncomeCategoriesCtrl = async () => {
        const categories = await IncomeCategory.find()
        // .populate('vehicles')
    
        return categories;
};

module.exports = getIncomeCategoriesCtrl;