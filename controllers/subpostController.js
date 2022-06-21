const SubPost= require('../models/subpostModel');
const User= require('../models/userModel');
const jwt= require('jsonwebtoken');

//create subpost function
const createSubPost= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email}); 
        if (user) {
            const subpost= await SubPost.create({
                subpost_body: req.body.subpost_body,
                subpost_type: req.body.subpost_type,
                subpost_user: user.name,
                subpost_parent: req.params.pid,
                subpost_attribute_1: 0,
                subpost_attribute_2: req.body.subpost_attribute,
                subpost_attribute_3: null,
            });
            res.json({status: 'ok', message: 'subpost created', subpost:subpost});
        } else {
            res.json({status: 'unathenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

//get subposts function
const getSubPosts= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});
        if (user) {
            const subpost= await SubPost.find({subpost_type: 0, subpost_parent: req.params.pid});
            res.json({status: 'ok', subpost:subpost});
        } else {
            res.json({status: 'unauthenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

//get subpost by attribute function
const getSubPostByAttribute= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});
        if (user) {
            const subpost= await SubPost.find({subpost_type: 0, subpost_attribute_2: req.params.att});
            res.json({status: 'ok', subpost:subpost}); 
        } else {
            res.json({status: 'unauthenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

//get subpost by id function
const getSubPostById= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});
        if (user) {
            const subpost= await SubPost.find({subpost_type: 0, id: req.params.id, subpost_parent: req.params.pid,});
            res.json({status: 'ok', subpost:subpost}); 
        } else {
            res.json({status: 'unauthenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

//update subpost function
const updateSubPost= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});  
        if (user) {
            const subpost= await SubPost.findOne({subpost_type: 0, id: req.params.id, subpost_user: user.name, subpost_parent: req.params.pid,}).update({
                subpost_body: req.body.subpost_body,
                subpost_type: req.body.subpost_type,
                subpost_user: user.name,
                subpost_parent: req.params.pid,
                subpost_attribute_1: 0,
                subpost_attribute_2: req.body.subpost_attribute,
                subpost_attribute_3: null,
            });
            res.json({status: 'ok', message: 'subpost updated', subpost:subpost});
        } else {
            res.json({status: 'unauthenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

//delete subpost function
const deleteSubPost= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try{
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});  
        if (user) {
            const subpost= await (await SubPost.findOne({subpost_type: 0, id: req.params.id, subpost_user: user.name, subpost_parent: req.params.pid,}));
            subpost.delete();
            res.json({status: 'ok', message: 'subpost deleted'});
        } else {
            res.json({status: 'unauthenticated'});
        }
    } catch(err) {
        res.json({error: err.message});
    }
}

module.exports= {createSubPost, getSubPosts, getSubPostByAttribute, getSubPostById, updateSubPost, deleteSubPost};