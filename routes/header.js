var express = require('express');
var router = express.Router();


/* GET /header page. */

router.get('/', function(req, res) {
  var header = req.headers
  var userAgent = (header["user-agent"])
  var leftPos = userAgent.indexOf("(") + 1
  var rightPos = userAgent.indexOf(")")
  var os = userAgent.slice(leftPos, rightPos)

  var lang = header["accept-language"].split(",")[0]

  var ip = header['x-forwarded-for']
  console.log(ip)



  res.json({ipaddress: ip, language: lang, software: os });
});

module.exports = router;


/*
exports.header = function (req, res){
  var header = req.headers
  var userAgent = (header["user-agent"])
  var leftPos = userAgent.indexOf("(") + 1
  var rightPos = userAgent.indexOf(")")
  var os = userAgent.slice(leftPos, rightPos)

  var lang = header["accept-language"].split(",")[0]

  var ip = header['x-forwarded-for'];

  res.json({
    ipaddress: ip,
    langauge: lang,
    software: os
  })
}
*/
