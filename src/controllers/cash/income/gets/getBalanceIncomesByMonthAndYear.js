require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getBalanceIncomesByMonthAndYearCtrl = async (month, year) => {
  const filter = { active: true };

  if (year && month) {
    // Convertimos los valores a enteros
    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month);

    const startOfMonth = new Date(parsedYear, parsedMonth, 1);
    const endOfMonth = new Date(parsedYear, parsedMonth + 1, 1); // El primer día del mes siguiente
    
    const incomes = await Income.find({
      ...filter,
      date: {
        $gte: startOfMonth, // Fecha de inicio del mes
        $lt: endOfMonth // Fecha de inicio del siguiente mes
      }
    });

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
