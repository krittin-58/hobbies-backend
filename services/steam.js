require('dotenv').config()
const axios = require('axios').default

const instance = axios.create({
    baseURL: `${process.env.STEAM_API_ENDPOINT_URL}`
});

module.exports = instance