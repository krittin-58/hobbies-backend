var express = require('express');
var router = express.Router();

const tmdb = require('../services/tmdb')

router.get('/latest', async function (req, res) {
    try {
        res.send((await tmdb.get('/movie/latest')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id', async function (req, res) {
    try {
        res.send((await tmdb.get(`/movie/${req.params.id}`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/upcoming', async function (req, res) {
    try {
        res.send((await tmdb.get('/movie/upcoming')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/popular', async function (req, res) {
    try {
        res.json((await tmdb.get('/movie/popular')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/now_playing', async function (req, res) {
    try {
        res.send((await tmdb.get('/movie/now_playing')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/top_rated', async function (req, res) {
    try {
        res.send((await tmdb.get('/movie/top_rated')).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/release_dates', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/release_dates`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/reviews', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/reviews`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/similar', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/similar`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/translations', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/translations`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/alternative_titles', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/alternative_titles`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/credits', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/credits`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/external_ids', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/external_ids`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/images', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/images`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/keywords', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/keywords`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/videos', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/videos`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/watch/providers', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/watch/providers`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

router.get('/:id/recommendations', async function (req, res) {
    try {
        res.send((await tmdb.get(`movie/${req.params.id}/recommendations`)).data)
    } catch (error) {
        res.send(error).status(404)
    }
});

module.exports = router