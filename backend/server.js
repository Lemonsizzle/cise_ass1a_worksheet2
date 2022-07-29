const express = require('express');

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;


const articles = require("./dummydata/articles")

const server = express();

server.get('/', (req, res) => {
    res.send('App is running');
});

server.get('/api/articles', (req,res) => {
    res.json(articles);
});

server.get('/api/articles/:id', (req,res) => {
    const article = articles.find((n) => n._id === req.params.id);
    res.send(article);
    console.log(req.params);
});


server.listen(PORT, console.log(`Server is working and listening PORT ${PORT}`));
