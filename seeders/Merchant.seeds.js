const Merchants = require('../Modals/Merchants');

const merchantsData = [
    {
        merchant_id: 'mer1',
        name: 'merchant1',
        address_id: 'merchAdd1'
    },
    {
        merchant_id: 'mer2',
        name: 'merchant2',
        address_id: 'merchAdd2'
    }
]

const seedMerchant = () => Merchants.bulkCreate(merchantsData);

module.exports = seedMerchant;