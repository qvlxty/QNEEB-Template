var express = require('express');
var app = express();
var router = require('./router');

//Router Setting
app.use('/',router);
//CSS/JS/ETC
app.use('/css',express.static('views/css'));
app.use('/fonts',express.static('views/fonts'));
app.use('/js',express.static('views/js'));
app.use('/img',express.static('views/img'));
//VIEW ENGINE
app.set('view engine','ejs');
//For POST request 
router.use(require('body-parser').urlencoded({ extended: true }));

//LAUNCH
app.listen(3000,()=>{console.log('Server running...');});
