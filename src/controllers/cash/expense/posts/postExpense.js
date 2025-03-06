require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const postExpenseCtrl = async (date, amount, paymentMethod, category, description) => {
    
  const newExpense = {
    date,
    amount,
    paymentMethod,
    category,
    description
  };
  
  const createdExpense = await Expense.create(newExpense);

    return createdExpense;
};

module.exports = postExpenseCtrl;