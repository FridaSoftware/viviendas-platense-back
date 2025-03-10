const getController = require('../../../../controllers/category/expense/gets/getActiveCategories.js');

const getActiveCategoriesHandler = async (req, res) => {

    try {
        const activeCategories = await getController();

        res.status(200).send(activeCategories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getActiveCategoriesHandler;