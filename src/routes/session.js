import { Router } from 'express';

const sessions = Router();
sessions.route('/')
   .get( 
      (req, res, next) => {

         if(req.query){     
            req.session = {
               token: req.query.oauth_token,
               verifier: req.query.oauth_verifier
           };
            res.json(req)
         }
         else {
            res.redirect('/login');
         }
   }
   )

export default sessions;