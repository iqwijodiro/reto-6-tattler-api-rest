const express = require('express');

const routes = require('./routes/index');

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const dbConfig = require('./config/db/db');
dbConfig();

app.use('/api', routes);

const port = 9090;

app.listen(port, ()=>{
    console.log('app listening in port: ' + port);
})