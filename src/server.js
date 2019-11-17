import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import sessions from './routes/session'
import Auth from './auth/index';
import tweets from './routes/tweets';
import tweetsUsers from './routes/users';
//import session from 'express-session';

const app = express();
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

//middleware
app.use(allowCrossDomain);
app.use( bodyParser.urlencoded({  extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
// Routes
app.use('/auth/twitter', Auth);
app.use('/sessions/callback', sessions);
app.use('/twitter/feedd', tweets );
app.use('/users/acount', tweetsUsers);

app.listen(8080, function() {
  console.log('App runining on port 8080!');
});