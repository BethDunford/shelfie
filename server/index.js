require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { SERVER_PORT, DATABASE_STRING } = process.env;
const {getInventory, createProduct, deleteProduct} = require ("../server/controller")

massive(DATABASE_STRING).then(db => {
    app.set('db', db);
    console.log("Database connected");
})
.catch(err => console.log(err));

app.use(express.json())

app.get('/api/inventory', getInventory);
app.post('/api/product', createProduct);
app.delete('/api/product/:id', deleteProduct);

app.listen(SERVER_PORT, () => {console.log(`Server listening on port ${SERVER_PORT}`)})