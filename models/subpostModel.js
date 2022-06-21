const mongoose= require('mongoose');

const SubPost= new mongoose.Schema({
    subpost_body: {type: String, required: true},
    subpost_type: {type: Number, required: true},
    subpost_user: {type: String, required: true},
    subpost_parent: {type: String, required: true},
    subpost_attribute_1: {type: Number, required: true},
    subpost_attribute_2: {type: String, required: false},
    subpost_attribute_3: {type: String, required: false},
}, 
{collection: 'subpost-data'});

const model= mongoose.model('SubPostData', SubPost);

module.exports= model;