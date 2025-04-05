require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const getIncomesByMonthAndYearCtrl = async (month, year, categoryId) => {
    
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
    };

    if (categoryId) {
        filter.category = categoryId;
    };
    

    const incomesByMonthAndYear = await Income.find(filter)
    .populate('category', 'name');

    return incomesByMonthAndYear;
};

module.exports = getIncomesByMonthAndYearCtrl;