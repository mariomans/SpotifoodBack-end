const express = require('express');
const { getPosts, createPost, postsByUser, postById, isPoster, deletePost, updatePost, photo, advertisement, singlePost, like, unlike, getlike, getPost } = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const { createPostValidator } = require('../validator')

const router = express.Router();
router.get('/posts', getPosts);
router.get('/post', getPost);
//like unlike
router.put('/post/like', requireSignin, like);
router.get('/post/getlike', requireSignin, like);
router.put('/post/unlike', requireSignin, unlike);

router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get('/posts/by/:userId', requireSignin, postsByUser);
router.get('/post/:postId', singlePost);
router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);
// photo
router.get('/post/photo/:postId', photo);

// any routes containing :userid
router.param("userId", userById);
// any routes containing :postId
router.param("postId", postById);

module.exports = router;

