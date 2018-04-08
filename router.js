var express = require('express');
var router = express.Router();

var main_controller = require('./controllers/main');

router.use('/',main_controller);

module.exports = router;