const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config({
    path:'variaveis.env'
});

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);
server.listen(3000, ()=>{
    console.log(`Server is runing in: http://localhost:${process.env.PORT}`);
});