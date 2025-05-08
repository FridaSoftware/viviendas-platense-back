const getController = require('../../controllers/category/getAllCategories.js');

const getAllCategoriesHandler = async (req, res) => {

    try {
        const allCategories = await getController();

        res.status(200).send(allCategories);

    } catch (error) {
        res.status(500).send({ error: error.message }); 
    }
};

module.exports = getAllCategoriesHandler;