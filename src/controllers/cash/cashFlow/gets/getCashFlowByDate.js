require('../../../../db.js');
const Income = require('../../../../models/Income.js');
const Expense = require('../../../../models/Expense.js');

const getCashFlowByDateCtrl = async (start, end) => {
    // Función para convertir 'DD/MM/YYYY' a 'YYYY-MM-DD'
    const formatDateToISO = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    };

    const startDate = formatDateToISO(start);
    const endDate = formatDateToISO(end);
    endDate.setHours(23, 59, 59, 999); // Asegurar que incluya el último momento del día

    // Traer los ingresos en el rango de fechas
    const incomes = await Income.find({
        active: true,
        $expr: {
            $and: [
                { $gte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, startDate] },
                { $lte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, endDate] }
            ]
        }
    }).populate('category', 'name');

    const expenses = await Expense.find({
        active: true,
        $expr: {
            $and: [
                { $gte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, startDate] },
                { $lte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, endDate] }
            ]
        }
    }).populate('category', 'name');

    // Agregar tipo para distinguir en el array combinado
    const formattedIncomes = incomes.map(entry => ({ ...entry.toObject(), type: 'income' }));
    const formattedExpenses = expenses.map(entry => ({ ...entry.toObject(), type: 'expense' }));

    // Unir ingresos y egresos
    const combined = [...formattedIncomes, ...formattedExpenses];

    // Ordenar por fecha ascendente
    combined.sort((a, b) => {
        const parseDate = (str) => {
            const [day, month, year] = str.split('/');
            return new Date(`${year}-${month}-${day}`);
        };
        return parseDate(a.date) - parseDate(b.date);
    });

    return combined;
};


module.exports = getCashFlowByDateCtrl;