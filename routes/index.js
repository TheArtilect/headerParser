var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res) {
  res.render("index", {
    title: "Request Header Parser",
    author: "Ian Agpawa"
  })

});

module.exports = router;
