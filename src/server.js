import express from 'express';
const bodyParser = require ("body-parser"); 

const app = express();

//Settings
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://www.jamar.com');
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


// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.listen(5000, ()=> console.log('server on port 5000'))