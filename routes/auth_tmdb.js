var express = require('express');
var router = express.Router();

const tmdb = require('../services/tmdb')

router.get('/guest/new', async function (req, res) {
    try {
        res.send((await tmdb.get('/authentication/guest_session/new')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/token/new', async function (req, res) {
    try {
        res.send((await tmdb.get('/authentication/token/new')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.post('/session/new', async function (req, res) {
    try {
        res.send((await tmdb.post('/authentication/session/new'), { request_token: req.body }))
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router