require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');
const app = express();
const { SERVER_PORT, DATABASE_STRING } = process.env;

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log("Database connected");
})
.catch(err => console.log(err));

app.use(express.json())


app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}`)})