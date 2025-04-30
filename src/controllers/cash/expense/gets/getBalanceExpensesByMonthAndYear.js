require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');
const Income = require('../../../../models/Income.js');

const getBalanceExpensesByMonthAndYearCtrl = async (month, year, categoryId) => {
  
  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };

    const expenseFilter = { ...filter };
    const incomeFilter = { ...filter };

    if (categoryId) {
      expenseFilter.category = categoryId;
    };
    
    const expenses = await Expense.find(expenseFilter);

    //OBTENER EGRESOS
    // Inicializamos dos variables para almacenar las sumas
    const expenseTotals = expenses.reduce((acc, expense) => {
      if (expense.currency === 'ARS') {
        acc.totalARS += expense.amount;
      } else if (expense.currency === 'USD') {
        acc.totalUSD += expense.amount;
      }
      return acc;
    }, { totalARS: 0, totalUSD: 0 });

    //OBTENER INGRESOS

    const incomes = await Income.find(incomeFilter);
    const incomeTotals  = incomes.reduce((acc, income) => {
      if (income.currency === 'ARS') {
        acc.totalARS += income.amount;
      } else if (income.currency === 'USD') {
        acc.totalUSD += income.amount;
      }
      return acc;
    }, { totalARS: 0, totalUSD: 0 });

    // Calcular balances
    const balanceARS = incomeTotals.totalARS - expenseTotals.totalARS;
    const balanceUSD = incomeTotals.totalUSD - expenseTotals.totalUSD;

    return {
      totalExpenses: {
        ARS: expenseTotals.totalARS,
        USD: expenseTotals.totalUSD
      },
      balance: {
        ARS: balanceARS,
        USD: balanceUSD
      }
    };
  }

  return {
    totalARS: 0,
    totalUSD: 0
  };
};

module.exports = getBalanceExpensesByMonthAndYearCtrl;
