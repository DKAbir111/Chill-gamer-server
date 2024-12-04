const express = require('express')
const router = express.Router()
const createGameRoute = (gameCollection) => {
    router.post('/games', async (req, res) => {
        const newData = req.body;
        const result = await gameCollection.insertOne(newData);
        res.send(result);
    })
    return router;
}

module.exports = createGameRoute;