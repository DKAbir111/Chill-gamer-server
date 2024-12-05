const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router()
const createGameRoute = (gameCollection) => {
    router.post('/games', async (req, res) => {
        const newData = req.body;
        const result = await gameCollection.insertOne(newData);
        res.send(result);
    })

    router.get('/reviews', async (req, res) => {
        const games = await gameCollection.find().toArray();
        res.send(games);
    })

    router.get('/review/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const data = await gameCollection.findOne(query);
        res.send(data);
    })

    return router;
}

module.exports = createGameRoute;