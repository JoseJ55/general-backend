const Address = require('../Modals/Address');

const addressData = [
    {
        address_id: 'custAdd1',
        street_address: 'street1',
        county: 'county1',
        state: 'state1',
        city: 'city1',
        zip: 'zip1'
    },
    {
        address_id: 'custAdd2',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    }, 
    {
        address_id: 'employAdd1',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    },
    {
        address_id: 'employAdd2',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    },
    {
        address_id: 'manuAdd1',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    },
    {
        address_id: 'manuAdd2',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    },
    {
        address_id: 'mer1',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    },
    {
        address_id: 'mer2',
        street_address: 'street2',
        county: 'county2',
        state: 'state2',
        city: 'city2',
        zip: 'zip2'
    }
]

const seedAddress = () => Address.bulkCreate(addressData);

module.exports = seedAddress;