require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const postIncomeCtrl = async (date, amount, currency, paymentMethod, category, description, fromClient) => {
    
  const newIncome = {
    date,
    amount,
    currency,
    paymentMethod,
    category,
    description,
    fromClient
  };
  
  const createdIncome = await Income.create(newIncome);

    return createdIncome;
};

module.exports = postIncomeCtrl;