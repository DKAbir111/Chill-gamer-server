const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const createUserRouter = require('./routes/user.route.js');
const createGameRouter = require('./routes/game.route.js');

const port = process.env.PORT || 5001
//middleware
app.use(cors());
app.use(express.json())

// basic route setup
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xratx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    const database = client.db('ChillGamer')
    const userCollection = database.collection('UserCollection')
    const gameCollection = database.collection('gameCollection')
    const watchCollection = database.collection('watchCollection')
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        //calling user routes
        app.use(createUserRouter(userCollection))
        //calling game routes
        app.use(createGameRouter(gameCollection, watchCollection))
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);
app.listen(port, () => [
    console.log(`Server is running on port ${port}`)
]);