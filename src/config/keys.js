const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "VnJks28umYMRPIAVrBIhinY17",
    TWITTER_CONSUMER_SECRET: "TkTBRu670lxDDX7ZLrUDCrnAaVNTDRBUPu79RT00hKIGVBqJDC",
    TWITTER_ACCESS_TOKEN: "1069558239828869120-yEQP7DYsvqnF6kZVU59J5j6LxSH4O8",
    TWITTER_TOKEN_SECRET: "MKwSJD01oCIux1bkBg5Trto6LCqQAAfxaN5fKih9cJ3oX",
  };
  
  const MONGODB = {
    MONGODB_URI: `mongodb+srv://omnicanaljamar:Jamar2021@cluster0-ufoov.mongodb.net/test?retryWrites=true&w=majority`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;