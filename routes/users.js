var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */

router.get('/register', userController.register);

router.post('/register', userController.create);

router.get('/login', userController.login);

router.post('/login', userController.processLogin);

module.exports = router;
