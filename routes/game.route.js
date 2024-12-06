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
        res.send(result);
    })

    //update review by id
    router.put('/update/:id', async (req, res) => {
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).send({ error: 'Invalid ID format' });
        }

        const review = req.body;
        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
            $set: {
                review: review.review,
                rating: review.rating,
                title: review.title,
                cover: review.cover,
                genre: review.genre,
                year: review.year,
            },
        };

        try {
            const result = await gameCollection.updateOne(filter, updateDoc);
            res.send(result);
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: 'Failed to update the review' });
        }
    });

    //delete review by user
    router.delete('/review/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await gameCollection.deleteOne(query);
        res.send(result);
    })

    //Add watch collection list
    router.post('/watchlist', async (req, res) => {
        const newData = req.body;

        try {
            const existingData = await watchCollection.findOne({
                insertedId: newData.insertedId,
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