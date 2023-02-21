const Products = require('../Modals/Products');

const productsData = [
    {
        product_id: 'prod1',
        name: 'product1',
        description: 'This is the description for product1.',
        category_id: 'cat1',
        merchant_price: 15.50,
        merchant_id: 'mer1',
        manufacture_price: 10.00,
        manufacture_id: 'manu1'
    },
    {
        product_id: 'prod2',
        name: 'product2',
        description: 'This is the description for product2.',
        category_id: 'cat2',
        merchant_price: 5.55,
        merchant_id: 'mer2',
        manufacture_price: 3.00,
        manufacture_id: 'manu1'
    },
    {
        product_id: 'prod3',
        name: 'product3',
        description: 'This is the description for product3.',
        category_id: 'cat3',
        merchant_price: 50.55,
        merchant_id: 'mer2',
        manufacture_price: 35.75,
        manufacture_id: 'manu2'
    }
]

const seedProduct = () => Products.bulkCreate(productsData);

module.exports = seedProduct;