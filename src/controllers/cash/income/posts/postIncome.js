require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const postIncomeCtrl = async (date, amount, paymentMethod, category, description) => {
    
  const newIncome = {
    date,
    amount,
    paymentMethod,
    category,
    description
  };
  
  const createdIncome = await Income.create(newIncome);

    return createdIncome;
};

module.exports = postIncomeCtrl;