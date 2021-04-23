'use strict';
const express = require('express');
const app = express();
const open = require("open");
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(express.static('docs'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const citiesRoutes = require('./routes/cities.routes');

app.use('/api/v1/cities', citiesRoutes);

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
    open("http://localhost:8000");
});