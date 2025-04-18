const Client = require('../../../models/Client.js');

const putCreateContractCtrl = async (_id, client, branch, contractDate, model, roofType, roofSlope, baseType, items, areas, sqm, additionals, paymentPlan, totalCost, payments, installmentsDate, installmentsQuantity, installmentsPrice) => {
    
    let actualModel = model || client.model;

    let lumpSum = null;
    let financed = null;

    if (paymentPlan === "Contado") {
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
                amountWithoutLateFee: installmentsPrice,
                description: `Cuota ${i + 1}/${installmentsQuantity}`
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
        branch,
        contractDate,
        personalData: client.personalData,
        projectData: {
            address: client.projectData.address,
            city: client.projectData.city,
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
            additionals
        },
        financialData: {
            downPayment: client.financialData.downPayment || null,
            totalCost,
            paymentPlan,
            lumpSum,
            financed
        }
    };

    const updatedClient = await Client.findOneAndUpdate(
        { _id },
        {
            ...newContract,
            contractSigned: false,
            $push: { contractVersion: newContract }
        },
        { new: true }
    );

    return updatedClient;
};

module.exports = putCreateContractCtrl;