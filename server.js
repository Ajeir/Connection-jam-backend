import express from 'express'
import mongoose from 'mongoose'
import Cards from './models/dbCards.js'

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection_url = 'mongodb+srv://zilla0:jam@cluster0.lbths.mongodb.net/connection-jamdb?retryWrites=true&w=majority'


// Middlewares



// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



// API Endpoints
app.get('/', (req, res) => res.status(200).send('works'));

app.post('/jam/card', (req, res) => { 
    const dbCard = req.body; 

    Cards.create(dbCard, (err, data) => {;
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
});

app.get('/jam/card', (req, res) => { 
    Cards.find(dbCard, (err, data) => {;
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`Server is running on port ${port}`));