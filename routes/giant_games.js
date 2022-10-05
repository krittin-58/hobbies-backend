var express = require('express');
var router = express.Router();

const giant_bomb = require('../services/giantbomb')

router.get('/games', async function (req, res) {
    try {
        res.send((await giant_bomb.get('/api/games')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router