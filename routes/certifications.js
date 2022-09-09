var express = require('express');
var router = express.Router();

const tmdb = require('../services/tmdb')

router.get('/movie/list', async function (req, res) {
    try {
        res.send((await tmdb.get('/certification/movie/list')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/tv/list', async function (req, res) {
    try {
        res.send((await tmdb.get('/certification/tv/list')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router