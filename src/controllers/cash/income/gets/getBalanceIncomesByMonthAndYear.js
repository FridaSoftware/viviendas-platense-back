require('../../../../db.js');
const Income = require('../../../../models/Income.js');
const Expense = require('../../../../models/Expense.js');

const getBalanceIncomesByMonthAndYearCtrl = async (month, year, categoryId) => {

  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    // Filtrar por fecha tipo texto
    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };

    const incomeFilter = { ...filter };
    const expenseFilter = { ...filter };

    if (categoryId) {
      incomeFilter.category = categoryId;
    };
    
    const incomes = await Income.find(incomeFilter);

    //OBTENER INGRESOS
    // Inicializamos dos variables para almacenar las sumas
    const incomeTotals  = incomes.reduce((acc, income) => {
      if (income.currency === 'ARS') {
        acc.totalARS += income.amount;
      } else if (income.currency === 'USD') {
        acc.totalUSD += income.amount;
      }
      return acc;
    }, { totalARS: 0, totalUSD: 0 });

    //OBTENER EGRESOS
    const expenses = await Expense.find(expenseFilter);
    const expenseTotals = expenses.reduce((acc, expense) => {
      if (expense.currency === 'ARS') {
        acc.totalARS += expense.amount;
      } else if (expense.currency === 'USD') {
        acc.totalUSD += expense.amount;
      }
      return acc;
    }, { totalARS: 0, totalUSD: 0 });

    // Calcular balances
    const balanceARS = incomeTotals.totalARS - expenseTotals.totalARS;
    const balanceUSD = incomeTotals.totalUSD - expenseTotals.totalUSD;

    return {
      totalIncomes: {
        ARS: incomeTotals.totalARS,
        USD: incomeTotals.totalUSD
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

module.exports = getBalanceIncomesByMonthAndYearCtrl;
