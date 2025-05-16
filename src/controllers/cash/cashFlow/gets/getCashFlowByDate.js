require('../../../../db.js');
const Income = require('../../../../models/Income.js');
const Expense = require('../../../../models/Expense.js');

const getCashFlowByDateCtrl = async (start, end, categoryId, currency, type) => {
    // Función para convertir 'YYYY-MM-DD' a objeto Date
    const formatDateToISO = (dateStr) => {
        const [year, month, day] = dateStr.split('-');
        return new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    };

    const startDate = formatDateToISO(start);
    const endDate = formatDateToISO(end);
    endDate.setHours(23, 59, 59, 999);

    // Filtro base para fechas
    const dateFilter = {
        $expr: {
            $and: [
                { $gte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, startDate] },
                { $lte: [{ $dateFromString: { dateString: "$date", format: "%d/%m/%Y" } }, endDate] }
            ]
        }
    };

    // Construir filtros para ingresos y egresos
    const incomeFilter = { active: true, ...dateFilter };
    const expenseFilter = { active: true, ...dateFilter };

    // Aplicar filtro de categoría si existe
    if (categoryId) {
        incomeFilter.category = categoryId;
        expenseFilter.category = categoryId;
    }

    // Aplicar filtro de moneda si existe
    if (currency) {
        incomeFilter.currency = currency;
        expenseFilter.currency = currency;
    }

    // Buscar datos según el tipo especificado
    let results = [];
    
    if (type === 'income') {
        const incomes = await Income.find(incomeFilter).populate('category', 'name');
        results = incomes.map(entry => ({ ...entry.toObject(), type: 'income' }));
    } 
    else if (type === 'expense') {
        const expenses = await Expense.find(expenseFilter).populate('category', 'name');
        results = expenses.map(entry => ({ ...entry.toObject(), type: 'expense' }));
    } 
    else {
        // Si no se especifica type, traer ambos
        const [incomes, expenses] = await Promise.all([
            Income.find(incomeFilter).populate('category', 'name'),
            Expense.find(expenseFilter).populate('category', 'name')
        ]);
        
        const formattedIncomes = incomes.map(entry => ({ ...entry.toObject(), type: 'income' }));
        const formattedExpenses = expenses.map(entry => ({ ...entry.toObject(), type: 'expense' }));
        results = [...formattedIncomes, ...formattedExpenses];
    }

    // Ordenar por fecha ascendente
    results.sort((a, b) => {
        const parseDate = (str) => {
            const [day, month, year] = str.split('/');
            return new Date(`${year}-${month}-${day}`);
        };
        return parseDate(a.date) - parseDate(b.date);
    });

    // Calcular totales por moneda
    const totalCash = {
        totalARS: 0,
        totalUSD: 0
    };

    for (const entry of results) {
        if (entry.currency === 'ARS') {
            totalCash.totalARS += entry.type === 'income' ? entry.amount : -entry.amount;
        } else if (entry.currency === 'USD') {
            totalCash.totalUSD += entry.type === 'income' ? entry.amount : -entry.amount;
        }
    }

    return {
        cashFlow: results,
        totalCash
    };
};

module.exports = getCashFlowByDateCtrl;