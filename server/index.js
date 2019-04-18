const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require('./route');
const http = require("http");
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://langston:langston@cluster0-dq9yl.mongodb.net/test?retryWrites=true", { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log("Connecte a mongo db"))
    .on('error', error => console.log("Erreur de connexion a mongoDB ", error));

expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({type: '*/*'}));


const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);

server.listen(port);
console.log('---------------');
console.log('Le serveur ecoute sur le port : ', port);
console.log('---------------');
