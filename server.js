// Server
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
//Turn on server
const port = 8000;
//Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database)=>{
    const ourDB = database.db('db')
    ourDB.collection('accounts')
    if(err) return console.log(err)
    //add route
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on: '+port)
    });
})