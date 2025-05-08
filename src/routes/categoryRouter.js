const categoryRouter = require('express').Router();
const { getAllCategories } = require('../handlers/category/index.js');

categoryRouter.get('/', getAllCategories);

module.exports = categoryRouter;