var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();
var bodyParser = require('body-parser');
var passport = require('./strategies/sql.localstrategy');
var sessionConfig = require('./modules/session.config');
var request = require('request');


// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');

var port = process.env.PORT || 3000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve back static files
app.use(express.static('./server/public'));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);

//GitHub Information 
//*****************************************

// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;

var user_options = {
    url: 'https://api.github.com/users/' + username,
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token ' + oauthToken
    }
};

//API call in server to protect oAuthToken --> Github User
app.get('/github/user', function (req, res) {
    request(user_options, function (error, response, body) {
        if (response && response.statusCode == 200) {
            res.send(body);
        } else {
            res.sendStatus(500);
        }
    });
});

var repo_options = {
    url: 'https:/api.github.com/users' + username + '/repos',
    headers: {
        'User-Agent': 'request',
        'Authorization': 'token' + oauthToken
    }
};
//API call in server to protect oAuthToken --> Github repos
app.get('github/repos', function (req, res) {
    request(repo_options, function(error, response, body){
        if(response && response.statusCode == 200) {
            res.send(body);
        }else{
            res.sendStatus(500);
        }
    });
});
//*******************************************

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function () {
    console.log('Listening on port:', port);
});


