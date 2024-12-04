const express = require('express')

const router = express.Router()

const createUserRouter = (userCollection) => {

    router.post('/users', async (req, res) => {
        const newUser = req.body;
        const result = await userCollection.insertOne(newUser);
        res.send(result)
    })

    return router;
}

module.exports = createUserRouter;