var express = require('express');
var router = express.Router();
var blogCtrl = require('../controllers/blogs');


/* GET /api/posts*/
router.get('/posts', blogCtrl.getAllPosts);
router.get('/post/:id', blogCtrl.getOnePost);
router.post('/post', blogCtrl.createPost);
router.delete('/post/:id', blogCtrl.deletePost);

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;