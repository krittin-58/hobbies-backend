var express = require('express');
var router = express.Router();

const tmdb = require('../services/tmdb')

router.get('/latest', async function (req, res) {
    try {
        res.send((await tmdb.get('/person/latest')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/popular', async function (req, res) {
    try {
        res.send((await tmdb.get('/person/popular')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/images', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/images`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/tagged_images', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/tagged_images`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/translations', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/translations`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/combined_credits', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/combined_credits`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/movie_credits', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/movie_credits`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/tv_credits', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/tv_credits`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/changes', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/changes`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/external_ids', async function (req, res) {
    try {
        res.send((await tmdb.get(`/person/${req.params.id}/external_ids`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router