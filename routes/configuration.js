var express = require('express');
var router = express.Router();

const tmdb = require('../services/tmdb')

router.get('/countries', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration/countries')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/jobs', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration/jobs')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/languages', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration/languages')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/primary_translations', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration/primary_translations')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/timezones', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration/timezones')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/', async function (req, res) {
    try {
        res.send((await tmdb.get('/configuration')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router