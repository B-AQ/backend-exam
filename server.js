const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const {getFlowers , createFav, favFlowers, deleteFav, updateFav,} = require('./controller/flowers')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/flower", {
  useNewUrlParser: true, useUnifiedTopology: true
});

// app.get('/',(req,res) => {res.send('hi')})

app.get('/flowers',getFlowers)
app.get('/favFlower',favFlowers)
app.post('/createFav',createFav)
app.delete('/deleteFav/:id',deleteFav)
app.put('/updateFav/:flower_id',updateFav)



app.listen (PORT, ()=>{console.log(`lisnting to the port ${PORT}`)})