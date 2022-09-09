var express = require('express');
var router = express.Router();

const weather_data = require('../services/openweather')

router.get('/:lat/:lon', async function (req, res) {
    try {
        res.send((await weather_data.get(`/data/2.5/weather?lat=${req.params.lat}&lon=${req.params.lon}`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router