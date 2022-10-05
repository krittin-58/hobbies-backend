var express = require('express');
var router = express.Router();

const steam_store = require('../services/steam')

router.get('/featured', async function (req, res) {
    try {
        res.send((await steam_store.get('/api/featured')).data)
    } catch (error) {
        res.send(error).status(500)
    }
})

router.get('/salepage', async function (req, res) {
    try {
        res.send((await steam_store.get('/api/salepage')).data)
    } catch (error) {
        res.send(error).status(500)
    }
})

router.get('/featuredcategories', async function (req, res) {
    try {
        res.send((await steam_store.get('/api/featuredcategories')).data)
    } catch (error) {
        res.send(error).status(500)
    }
})


module.exports = router