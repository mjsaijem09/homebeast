const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const server = require('http').createServer(app);
const expressLayouts = require('express-ejs-layouts');

// Set Database Connection
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'project_101'
});

connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(bodyParser.json());       
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressLayouts);
app.set("layout signin", false);
app.set("layout signup", false);
app.set("layout index", false);
app.set("layout bussiness-user", false);
app.set('layout', './layouts/company');

app.get('/',(req, res) => {
    let sql = "SELECT * FROM uploads";
    let query = connection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('index', { layout: 'index' });
    });
});

app.get('/signup', (req, res) => {
    res.render('signup', { layout: 'signup' });
});

app.get('/signin', (req, res) => {
    res.render('signin', { layout: 'signin' });
});

app.get('/bussiness-user', (req, res) => {
    res.render('bussiness-user', { layout: 'bussiness-user' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard',{
        page_name: 'dashboard',
        title: 'Dashboard'
    });
});

app.get('/posts', (req, res) => {
    res.render('posts',{
        page_name: 'posts',
        title: 'Posts'
    });
});

const port = process.env.PORT || 3000;

// Server Listening
server.listen(port, function () {
    console.log('Server successfully running at: -',port);
});