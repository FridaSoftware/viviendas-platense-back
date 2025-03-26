require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getBalanceIncomesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    const formattedMonth = month.toString().padStart(2, "0");
    const yearString = year.toString();

    filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };
    
    const incomes = await Income.find(filter);

    // Calcular las sumas
    const totalIncomes = incomes.reduce((acc, income) => acc + income.amount, 0);

    return {
      totalIncomes
    };
  }

  return {
    totalIncomes: 0,
  };
};

module.exports = getBalanceIncomesByMonthAndYearCtrl;
