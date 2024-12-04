const express = require('express')
const router = express.Router()
const createGameRoute = (gameCollection) => {
    router.get('/game', (req, res) => {
        res.send('hello from game')
    })
    return router;
}

module.exports = createGameRoute;