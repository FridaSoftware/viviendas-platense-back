require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getBalanceIncomesByMonthAndYearCtrl = async (month, year, categoryId) => {

  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    // Filtrar por fecha tipo texto
    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };

    if (categoryId) {
      filter.category = categoryId;
    };
    
    const incomes = await Income.find(filter);

    // Inicializamos dos variables para almacenar las sumas
    const result = incomes.reduce((acc, income) => {
      if (income.currency === 'ARS') {
        acc.totalARS += income.amount;
      } else if (income.currency === 'USD') {
        acc.totalUSD += income.amount;
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

module.exports = getBalanceIncomesByMonthAndYearCtrl;
