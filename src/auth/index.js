import { OAuth } from  'oauth' 
import { Router } from 'express';

const Auth = Router();

var oauth = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    "5itLbT4POJAf8TILbB02zgbjU",
    "6yKUX6FVi6AIvd1Rv9f3L7dmZzZvkKdKIfGW6o6pQBw71siTpe",
    "1.0",
    "http://localhost:3000/auth/twitter",
    "HMAC-SHA1"
);

Auth.route('/')
    .get(    
        (req, res) => {
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
                 res.json(req.session)
             }
        });
     });
     
export default Auth;