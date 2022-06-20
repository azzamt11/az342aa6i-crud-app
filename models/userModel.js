const mongoose= require('mongoose');

const User= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    user_attribute_1: {type: Number, required: true},
    user_attribute_2: {type: String, required: false},
    user_attribute_3: {type: String, required: false},
}, 
{collection: 'user-data'});

const model= mongoose.model('UserData', User);

module.exports= model;