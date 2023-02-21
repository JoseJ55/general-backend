const Categories = require('../Modals/Categories');

const categoryData = [
    {
        category_id: 'cat1',
        name: 'category1'
    },
    {
        category_id: 'cat2',
        name: 'category2'
    }, 
    {
        category_id: 'cat3',
        name: 'category3'
    }
]

const seedCategories = () => Categories.bulkCreate(categoryData);

module.exports = seedCategories;