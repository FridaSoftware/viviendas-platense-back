require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getExpensesByMonthAndYearCtrl = async (month, year) => {
    const filter = { active: true };

    if (year && month) {
        const formattedMonth = month.toString().padStart(2, "0"); // Asegurar dos dígitos en el mes
        const yearString = year.toString();

        // Buscar fechas que coincidan con el formato "MM/YYYY"
        filter.date = { $regex: new RegExp(`^\\d{2}/${formattedMonth}/${yearString}$`) };
    } else if (year) {
        const yearString = year.toString();
        // Buscar cualquier fecha que termine en "/YYYY"
        filter.date = { $regex: new RegExp(`/${yearString}$`) };
    }

    const expensesByMonthAndYear = await Expense.find(filter)
    .populate('category', 'name');
    
    return expensesByMonthAndYear;
};

module.exports = getExpensesByMonthAndYearCtrl;