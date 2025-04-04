require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const postIncomeCtrl = async (date, amount, currency, paymentMethod, category, description) => {
    
  const newIncome = {
    date,
    amount,
    currency,
    paymentMethod,
    category,
    description
  };
  
  const createdIncome = await Income.create(newIncome);

    return createdIncome;
};

module.exports = postIncomeCtrl;