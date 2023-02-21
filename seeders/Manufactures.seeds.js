const Manufactures = require('../Modals/Manufactures');

const manufacturesData = [
    {
        manufacture_id: 'manu1',
        name: 'manufacture1',
        address_id: 'manuAdd1'
    },
    {
        manufacture_id: 'manu2',
        name: 'manufacture2',
        address_id: 'manuAdd2'
    }
]

const seedManufacture = () => Manufactures.bulkCreate(manufacturesData);

module.exports = seedManufacture;