require('dotenv').config()
const axios = require('axios').default

const instance = axios.create({
    baseURL: `${process.env.OPENWEATHER_API_ENDPOINT_URL}`,
    params: { appid: `${process.env.OPENWEATHER_API_KEY}`}
});

module.exports = instance