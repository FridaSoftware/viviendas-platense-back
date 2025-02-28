const Client = require('../../../models/Client.js');

const putCreateContractCtrl = async (_id, client, contractDate, model, roofType, roofSlope, baseType, items, areas, sqm, paymentPlan, totalCost, payments, installmentsDate, installmentsQuantity, installmentsPrice) => {
    
    let actualModel = "";

    if(model){
        actualModel = model;
    } else {
        actualModel = client.model;
    }

    let lumpSum = null;
    let financed = null;

    if(paymentPlan === "Contado"){
        lumpSum = {
            payments
        };
    } else {

        let installments = [];

        const [day, month, year] = installmentsDate.split('/').map(Number);
        let currentDate = new Date(year, month - 1, day);

        for (let i = 0; i < installmentsQuantity; i++) {

            let dueDate = new Date(currentDate);
            dueDate.setDate(10);
            dueDate.setMonth(currentDate.getMonth() + i);

            let formattedDueDate = `${String(dueDate.getDate()).padStart(2, '0')}/${String(dueDate.getMonth() + 1).padStart(2, '0')}/${dueDate.getFullYear()}`;

            installments.push({
                dueDate: formattedDueDate,
                amountWithoutLateFee: installmentsPrice
            });
        }

        financed = {
            firstPayments: payments,
            installments: {
                startDate: installmentsDate,
                quantity: installmentsQuantity,
                payments: installments
            }
        };
    }

    const newContract = {
        contractDate,

        projectData: {
            model: actualModel,
            roof: {
                type: roofType,
                slope: roofSlope
            },

            base: {
                type: baseType
            },

            items,
            areas,
            sqm,
        },

        financialData: {
            totalCost,
            paymentPlan,
            lumpSum,
            financed
        }
    };

    const createdContract = await Client.findOneAndUpdate({ _id }, newContract, { new: true });

    return createdContract;
};

module.exports = putCreateContractCtrl;