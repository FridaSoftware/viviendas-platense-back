const getController = require('../../../../controllers/category/income/gets/getCategories.js');

const getIncomeCategoriesHandler = async (req, res) => {

    try {
        const categories = await getController();
        res.status(200).send(categories);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = getIncomeCategoriesHandler;