const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router()
const createGameRoute = (gameCollection, watchCollection) => {
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

    //Add watch collection list
    router.post('/watchlist', async (req, res) => {
        const newData = req.body;

        try {
            const existingData = await watchCollection.findOne({
                _id: newData._id,
                email: newData.email
            });
            if (existingData) {
                return res.status(409).send({ message: "Item already exists in the watchlist for this email." });
            }
            const result = await watchCollection.insertOne(newData);
            res.status(201).send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "An error occurred while adding to the watchlist." });
        }
    });

    return router;
}

module.exports = createGameRoute;