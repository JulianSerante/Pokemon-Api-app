require('dotenv').config();
const { ENDPOINT_TYPE } = process.env;
const axios = require('axios');

const getAllTypes = async () => {
    const { data } = await axios(ENDPOINT_TYPE);
    const types = data.results.map(type => ({
        name: type.name
    }));
    return types;
}

module.exports = getAllTypes