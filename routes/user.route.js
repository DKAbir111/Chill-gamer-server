const express = require('express')

const router = express.Router()

const createUserRouter = (userCollection) => {

    router.get('/users', (req, res) => {
        res.send('Get users route')
    })
    console.log(userCollection)
    return router;
}

module.exports = createUserRouter;