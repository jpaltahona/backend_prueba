import { Router } from 'express';
import session from 'express-session';
const sessions = Router();


sessions.route('/')
   .get( 
      (req, res, next) => {
         console.log(req.query);
         console.log(req.session)
         if(req.query){
           // req.session.verifier = req.query.oauth_verifier;
            const oauth_data = req.query;

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
                        req.session.oauth.access_token = oauth_access_token;
                        req.session.oauth.access_token_secret = oauth_access_token_secret;
                        console.log(results, req.session.oauth);
                        res.json({
                           mesagge: 'good acces'
                        })
                        // res.redirect('/');
                     }
               }
            )
         }
         else {
            res.redirect('/login');
         }
   }
   )

export default sessions;