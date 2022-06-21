const express = require('express');
const app= express();
const cors= require('cors');
const mongoose= require('mongoose');
const User= require('./models/userModel');
const api= require('./api.js');
const dotenv= require('dotenv');

app.use(cors());
app.use(express.json());

dotenv.config();

//connection
mongoose.connect(process.env.DB_URL);

//api endpoints
app.use(api);

//web endpoints
app.get('/hello', (req, res)=>{
    res.send('hello world');
});

//listening
app.listen(process.env.PORT||3000, ()=> {
    console.log('server is up and running');
});