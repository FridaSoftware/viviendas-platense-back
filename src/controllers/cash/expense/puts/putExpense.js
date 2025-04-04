require('../../../../db.js');
const Expense = require('../../../../models/Expense.js');

const putExpenseCtrl = async (_id, date, amount, currency, paymentMethod, category, description) => {

    const update = {};

    if (date !== null && date !== false) {
        update.date = date;
    };

    if (amount !== null && amount !== false) {
        update.amount = amount;
    };

    if (currency !== null && currency !== false) {
        update.currency = currency;
    };

    if (paymentMethod !== null && paymentMethod !== false) {
        update.paymentMethod = paymentMethod;
    };

    if (category !== null && category !== false) {
        update.category = category;
    };

    if (description !== null && description !== false) {
        update.description = description;
    };

    try {
        // Realiza la actualización en la base de datos
        const updatedExpense = await Expense.updateOne({ _id }, update, { new: true });

        if (!updatedExpense) {
            throw new Error("Expense not found");
        };

        return updatedExpense;

    } catch (error) {
        console.error("Error updating expense:", error);
        throw error;
    };

};

module.exports = putExpenseCtrl;