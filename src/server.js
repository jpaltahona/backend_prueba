import express from 'express';
import bodyParser from 'body-parser';
import { OAuth } from  'oauth' ;
import Authentications from './routes/auth'

const app = express();
app.use( bodyParser.urlencoded({  extended: false }));
app.use(bodyParser.json());
app.use(express.json());

    var oauth = new OAuth(
            "https://api.twitter.com/oauth/request_token",
            "https://api.twitter.com/oauth/access_token",
            "5itLbT4POJAf8TILbB02zgbjU",
            "6yKUX6FVi6AIvd1Rv9f3L7dmZzZvkKdKIfGW6o6pQBw71siTpe",
            "1.0",
            "http://localhost:8080/sessions/callback",
            "HMAC-SHA1"
    );

    app.get('/auth/twitter', (req, res) => {
       oauth.getOAuthRequestToken( (error, oauth_token, oauth_token_secret, results) => {
            if(error){
                console.log(error);
                res.send("Authentication Failed!");
            }
            else{
                req.session = {
                    token: oauth_token,
                    token_secret: oauth_token_secret
                };
                console.log(req.session);
                res.redirect(`https://twitter.com/oauth/authenticate?oauth_token=${oauth_token}` )
            }
       });
    });

    app.get('/sessions/callback', (req, res, next) => {
        console.log(req)
        if(req.session.oauth){
            req.session.oauth.verifier = req.query.oauth_verifier;
            const oauth_data = req.session.oauth;

            oauth.getOAuthRequestToken(
                oauth_data.token,
                oauth_data.token_secret,
                oauth_data.verifier,
                (error, oauth_access_token, oauth_access_token_secret, results) => {
                    if (error) {
                        console.log(error);
                        res.send("Authentication Failure!");
                      }
                    else {
                        eq.session.oauth.access_token = oauth_access_token;
                        req.session.oauth.access_token_secret = oauth_access_token_secret;
                        console.log(results, req.session.oauth);
                        res.send("Authentication Successful");
                        // res.redirect('/');
                    }
                }
            )
        }
        else {
            res.redirect('/login');
        }
    });
// Routes

app.listen(8080, function() {
  console.log('App runining on port 8080!');
});