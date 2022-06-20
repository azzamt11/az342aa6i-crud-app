const Post= require('../models/postModel');
const User= require('../models/userModel');
const jwt= require('jsonwebtoken');

//create post function
const createPost= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});  
        const post= await Post.create({
            post_body: req.body.post_body,
            post_type: req.body.post_type,
            post_user: user.name,
            post_attribute_1: 0,
            post_attribute_2: req.body.post_attribute,
            post_attribute_3: null,
        });
        res.json({status: 'ok', post:post});
    } catch(err) {
        res.json({error: err.message});
    }
}

//get posts function
const getPosts= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const post= await Post.find({post_type: 0});
        res.json({status: 'ok', post:post});
    } catch(err) {
        res.json({error: err.message});
    }
}

//get post by attribute function
const getPostByAttribute= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const post= await Post.find({post_type: 0, post_attribute_2: req.params.att});
        res.json({status: 'ok', post:post});
    } catch(err) {
        res.json({error: err.message});
    }
}

//update post function
const updatePost= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});  
        const post= await Post.findOne({id: req.params.id}).update({
            post_body: req.body.post_body,
            post_type: req.body.post_type,
            post_user: user.name,
            post_attribute_1: 0,
            post_attribute_2: req.body.post_attribute,
            post_attribute_3: null,
        });
        res.json({status: 'ok', post:post});
    } catch(err) {
        res.json({error: err.message});
    }
}

module.exports= {createPost, getPosts, getPostByAttribute, updatePost};