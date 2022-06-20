const mongoose= require('mongoose');

const Post= new mongoose.Schema({
    post_body: {type: String, required: true},
    post_type: {type: Number, required: true},
    post_user: {type: String, required: true},
    post_attribute_1: {type: Number, required: true},
    post_attribute_2: {type: String, required: false},
    post_attribute_3: {type: String, required: false},
}, 
{collection: 'post-data'});

const model= mongoose.model('PostData', Post);

module.exports= model;