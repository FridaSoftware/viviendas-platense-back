require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getBalanceExpensesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };
    
    const expenses = await Expense.find(filter);

    // Calcular las sumas
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

    return {
      totalExpenses
    };
  }

  return {
    totalExpenses: 0,
  };
};

module.exports = getBalanceExpensesByMonthAndYearCtrl;
