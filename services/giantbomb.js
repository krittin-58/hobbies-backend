require('dotenv').config()
const axios = require('axios').default

const instance = axios.create({
    baseURL: `${process.env.GIANT_BOMB_API_ENDPOINT_URL}`,
    params: { 
        api_key: `${process.env.GIANT_BOMB_API_KEY}`,
        format: 'json'
    }
});

module.exports = instance