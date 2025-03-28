require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const getActiveExpensesByDateCtrl = async (start, end) => {

    // Función para convertir 'DD/MM/YYYY' a 'YYYY-MM-DD'
    const formatDateToISO = (dateStr) => {
        const [day, month, year] = dateStr.split('/');
        return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    };

    const startDate = formatDateToISO(start);
    const endDate = formatDateToISO(end);
    endDate.setHours(23, 59, 59, 999); // Asegurar que incluya el último momento del día

    // Traer los ingresos en el rango de fechas
    const expenses = await Expense.find({
        active: true,
        $expr: {
            $and: [
                { $gte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, startDate] },
                { $lte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, endDate] }
            ]
        }
    }).populate('category', 'name');

    return expenses;
};

module.exports = getActiveExpensesByDateCtrl;