import { Router } from 'express';

import config from '../config';
import Twit from 'twit';

const T = new Twit(config);
const tweetsUsers = Router();

tweetsUsers.route('/')
   .get( (req, res, next) => {

    T.get('account/verify_credentials', { skip_status: true })
        .catch(function (err) {
            console.log('caught error', err.stack)
        })
        .then(function (result) {
            res.json(result.data);
        })

})

export default tweetsUsers;