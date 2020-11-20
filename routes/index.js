var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.home);

router.get('/Home', indexController.home);

router.get('/contacto', indexController.contact);

module.exports = router;