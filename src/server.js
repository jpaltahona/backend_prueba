import express from 'express';
import bodyParser from 'body-parser';
import sessions from './routes/session'
import Auth from './auth/index';
import cookieParser from 'cookie-parser';
//import session from 'express-session';

const app = express();

//middleware
app.use( bodyParser.urlencoded({  extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/auth/twitter', Auth);
app.use('/sessions/callback', sessions);

app.listen(8080, function() {
  console.log('App runining on port 8080!');
});