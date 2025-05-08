require('../../db.js');
const IncomeCategory = require('../../models/IncomeCategory.js');
const ExpenseCategory = require('../../models/ExpenseCategory.js');

const getAllCategoriesCtrl = async () => {
    //.lean(): Este método de Mongoose convierte los documentos de MongoDB en objetos JavaScript puros 
    const incomeCategories = await IncomeCategory.find({ active: true }).lean();
    const expenseCategories = await ExpenseCategory.find({ active: true }).lean();

const allCategories = [
    ...incomeCategories?.map(category => ({ ...category, type: 'income' })),
    ...expenseCategories?.map(category => ({ ...category, type: 'expense' }))
];

    return allCategories;
};

module.exports = getAllCategoriesCtrl;