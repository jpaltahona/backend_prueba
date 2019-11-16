const loginsCtrl = {};
import config from '../config/config';
//const Twitter = require('twitter-node-client').Twitter;
//import { Twitter } from 'twitter-node-client/';


loginsCtrl.login = async ( req, res ) => {
    const { user } = req.body;

    res.json({
        mesaage: title
      })
}
module.exports = loginsCtrl;

