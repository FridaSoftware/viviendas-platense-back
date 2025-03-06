const postController = require('../../../../controllers/category/expense/posts/postExpenseCategory.js');

const postExpenseCategoryHandler = async (req, res) => {

    const { name } = req.body;

    try {     
        if(!name){
            return res.status(400).send({ error: 'Missing name' });
        };

        if (typeof name !== 'string'){
            return res.status(400).send({ error: 'Incorrect DataType' });
        };

        const newCategory = await postController(name);

        res.status(200).json(newCategory);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = postExpenseCategoryHandler;