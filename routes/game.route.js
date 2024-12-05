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
    //get add review by email
    router.get('/reviews/:email', async (req, res) => {
        const email = req.params.email;
        const result = await gameCollection.find({ email }).toArray();
        if (result.length === 0) {
            return res.status(404).send({ message: "No reviews found for this email." });
        }
        res.send(result);
    })

    //find review by id
    router.get('/review/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await gameCollection.findOne(query)
        if (result.length === 0) {
            return res.status(404).send({ message: "No reviews found for this email." });
        }
        res.send(result);
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
    //find watch collection list by email address
    router.get('/watchlist/:email', async (req, res) => {
        const email = req.params.email;
        const result = await watchCollection.find({ email }).toArray()
        if (result.length === 0) {
            return res.status(404).send({ message: "No items found in the watchlist for this email." });
        }
        res.send(result);
    })



    return router;
}

module.exports = createGameRoute;