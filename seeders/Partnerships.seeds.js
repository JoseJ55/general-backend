const Partnerships = require('../Modals/Partnerships');

const PartnershipData = [
    {
        partnership_id: 'part1',
        merchant_id: 'mer1',
        manufacture_id: 'manu1'
    },
    {
        partnership_id: 'part2',
        merchant_id: 'mer2',
        manufacture_id: 'manu1'
    },
    {
        partnership_id: 'part3',
        merchant_id: 'mer2',
        manufacture_id: 'manu2'
    }
]

const seedPartnerships = () => Partnerships.bulkCreate(PartnershipData);

module.exports = seedPartnerships;