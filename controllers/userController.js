const User= require('../models/userModel');
const jwt= require('jsonwebtoken');

//register function
const register= async(req, res)=> {
    try{
        const user= await User.create({
            name: req.body.name,
            email: req.body.email, 
            password: req.body.password,
            user_attribute_1: 0,
            user_attribute_2: '',
            user_attribute_3: '',
        });
        const token= jwt.sign({
            name: user.name,  
            email: user.email, 
        }, 'secret123')
        res.json({status: 'ok', user:user, token: token});
    } catch(err) {
        res.json({error: err.message});
    }
}

//login function
const login= async(req, res)=> {
    const user= await User.findOne({
        email: req.body.email, 
        password: req.body.password,
    });
    if(user) {
        const token= jwt.sign({
            name: user.name,  
            email: user.email, 
        }, 'secret123');
        return res.json({status: 'ok', token: token});
    } else {
        return res.json({status:'error', user: false});
    }
}

//user function
const user= async(req, res)=> {
    const token= req.headers['authorization'].split(' ')[1];
    try {
        console.log(req.headers['authorization'].split(' ')[1]);
        const decoded= jwt.verify(token, 'secret123')
        const email= decoded.email;
        const user= await User.findOne({email:email});
        return res.json({status: 'ok', user: user});
    } catch(err) {
        res.json({error: err.message});
    }
}

module.exports= {register, login, user};