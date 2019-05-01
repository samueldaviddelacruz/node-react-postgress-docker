

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRepo = require('./persistence/pgProduct')
const products = require('./routes/products')(new productsRepo())
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/products', products);


app.listen(5000, err => {
  console.log('Listening');
});
