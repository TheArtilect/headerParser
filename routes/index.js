var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  var header = req.headers
  var userAgent = (header["user-agent"])
  var leftPos = userAgent.indexOf("(") + 1
  var rightPos = userAgent.indexOf(")")
  var os = userAgent.slice(leftPos, rightPos)

  var lang = header["accept-language"].split(",")[0]

  var ip = header['x-forwarded-for']

  //need to change IP
  //var ip = (req.connection.remoteAddress).split(".");
  //var firstip = ip[0].split(":")[ip[0].split(":").length - 1]
  //var formattedIP = firstip + "." + ip[1] + "." + ip[2]+ "." + ip[3]




  res.json({ipaddress: ip, language: lang, software: os });
});

module.exports = router;
