require('../../../../db.js');
const Income = require('../../../../models/Income.js');
const Expense = require('../../../../models/Expense.js');

const getCashFlowCtrl = async () => {
    const incomes = await Income.find().populate('category', 'name');
    const expenses = await Expense.find().populate('category', 'name');

    // Agregar una propiedad 'type' a cada ingreso y egreso para distinguirlos luego
    const incomesWithType = incomes.map(income => ({
        ...income.toObject(),
        type: 'income'
    }));

    const expensesWithType = expenses.map(expense => ({
        ...expense.toObject(),
        type: 'expense'
    }));

    // Combinar ambos arrays
    const cashFlow = [...incomesWithType, ...expensesWithType];

    // Ordenar por fecha de creación (más reciente primero)
    cashFlow.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return cashFlow;
};

module.exports = getCashFlowCtrl;
