require('dotenv').config()
const axios = require('axios').default

const instance = axios.create({
    baseURL: `${process.env.TMDB_API_ENDPOINT_URL}` + `${process.env.TMDB_API_VERSION}`,
    params: { api_key: `${process.env.TMDB_API_KEY}`}
});

module.exports = instance