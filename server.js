var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var employees = require('./routes/employees');

var port = 8000;

var app = express();

//View Engine
app.set('viewa', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', employees);

app.listen(port, ()=>{
    console.log('Server start at '+port)
})


