require('../../../../db.js');
const getActiveIncomes = require('../../income/gets/getActiveIncomes.js');
const getActiveExpenses = require('../../expense/gets/getActiveExpenses.js');

const getTotalCashCtrl = async () => {
    const incomes = await getActiveIncomes();
    const expenses = await getActiveExpenses();

    const totals = {
        ARS: {
            incomes: 0,
            expenses: 0
        },
        USD: {
            incomes: 0,
            expenses: 0
        }
    };

    // Sumar ingresos por moneda
    for (const income of incomes) {
        if (income.currency === 'ARS' || income.currency === 'USD') {
            totals[income.currency].incomes += income.amount;
        }
    }

    // Sumar egresos por moneda
    for (const expense of expenses) {
        if (expense.currency === 'ARS' || expense.currency === 'USD') {
            totals[expense.currency].expenses += expense.amount;
        }
    }

    return {
        totalARS: totals.ARS.incomes - totals.ARS.expenses,
        totalUSD: totals.USD.incomes - totals.USD.expenses
    };
};

module.exports = getTotalCashCtrl;
