import { Router } from 'express';

import config from '../config';
import Twit from 'twit';

const T = new Twit(config);
const tweets = Router();

tweets.route('/')
   .get( (req, res, next) => {
    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 10 }, function(err, data, response) {
        if(err){
            res.json(err)
        }
        else{
            res.json(data)
        }
    })
})

export default tweets;


