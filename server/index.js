

// Express App Setup
const express = require('express');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRepo = require('./persistence/pgProduct')
const products = require('./routes/Products/index')(new productsRepo())
const app = express();
app.use(helmet())
app.use(cors());
app.use(bodyParser.json());

app.use('/products', products);


app.listen(5000, err => {
  console.log('Listening');
});
