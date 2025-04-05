require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getBalanceExpensesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };
    
    const expenses = await Expense.find(filter);

    // Inicializamos dos variables para almacenar las sumas
    const result = expenses.reduce((acc, expense) => {
      if (expense.currency === 'ARS') {
        acc.totalARS += expense.amount;
      } else if (expense.currency === 'USD') {
        acc.totalUSD += expense.amount;
      }
      return acc;
    }, { totalARS: 0, totalUSD: 0 });

    return {
      totalARS: result.totalARS,
      totalUSD: result.totalUSD
    };
  }

  return {
    totalARS: 0,
    totalUSD: 0
  };
};

module.exports = getBalanceExpensesByMonthAndYearCtrl;
