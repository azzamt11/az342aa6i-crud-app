const {login, register, user}= require('./controllers/userController.js');
const {createPost, getPosts, getPostByAttribute, getPostById, updatePost, deletePost}= require('./controllers/postController.js');
const {createSubPost, getSubPosts, getSubPostByAttribute, getSubPostById, updateSubPost, deleteSubPost}= require('./controllers/subpostController.js');
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
router.get('/api/posts/:id',getPostById);
router.put('/api/posts/:id',updatePost);
router.delete('/api/posts/:id', deletePost);

//subpost api
router.post('/api/post/:pid/subpost', createSubPost);
router.get('/api/posts/:pid/subposts',getSubPosts);
router.get('/api/posts/:att',getSubPostByAttribute);
router.get('/api/posts/:pid/subposts/:id',getSubPostById);
router.put('/api/posts/:pid/subposts/:id',updateSubPost);
router.delete('/api/posts/:pid/subposts/:id', deleteSubPost);

module.exports= router;