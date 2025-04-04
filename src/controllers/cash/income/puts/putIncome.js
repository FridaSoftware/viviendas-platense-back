require('../../../../db.js');
const Income = require('../../../../models/Income.js');

const putIncomeCtrl = async (_id, date, amount, currency, paymentMethod, category, description) => {

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
        const updatedIncome = await Income.updateOne({ _id }, update, { new: true });

        if (!updatedIncome) {
            throw new Error("Income not found");
        };

        return updatedIncome;

    } catch (error) {
        console.error("Error updating income:", error);
        throw error;
    };

};

module.exports = putIncomeCtrl;