var express = require('express');
var requestIp  = require('request-ip');
var router = express.Router();
let listIp = {};

router.get('/', function(req, res, next) {
  const clientIp = requestIp.getClientIp(req); 
  if(clientIp in listIp){
    listIp[clientIp] += 1
  }
  else{
    listIp[clientIp] = 0;
  }
  console.log(listIp);
  res.json({
    user_address:clientIp,
    hits:listIp[clientIp]
  })
});

module.exports = router;
