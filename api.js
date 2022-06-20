const {login, register, user}= require('./controllers/userController.js');
const {createPost, getPosts, getPostByAttribute, updatePost}= require('./controllers/postController.js');
const express= require('express');
const router= express.Router();

//user authentication api
router.post('/api/register', register);
router.post('/api/login', login);
router.get('/api/user', user);

//post api
router.post('/api/post', createPost);
router.get('/api/posts',getPosts);
router.get('/api/posts/:att',getPostByAttribute);
router.put('/api/posts/:id',updatePost);

module.exports= router;