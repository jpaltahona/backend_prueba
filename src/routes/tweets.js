import { Router } from 'express';

import config from '../config';
import Twit from 'twit';

const T = new Twit(config);
const tweets = Router();

tweets.route('/')
   .get( (req, res, next) => {
       //{} req.body;
    T.get('search/tweets',
            { q: 'banana', count: 1 }, 
            (err, data, response) => {
            if(err){
                res.json({error: err})
            }
            else{
                res.json(data)
            }
    })
})

export default tweets;


