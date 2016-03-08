var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

// router.use('/stylesheets/style.css', express.static(__dirname +'/public')){
// 	console.log('here');
// };

router.use(express.static('public'));
// router.get('public/stylesheets/style.css', function(req, res) {
//   //res.sendFile(path.resolve('public/stylesheets/style.css'));
//   //console.log('request', req);
//   console.log(req.path);
//   console.log(__dirname);
//   var file = 'public' + req.path;
//   console.log(res.sendFile(req.path , {root: __dirname}));
  
// })

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  console.log(tweets);
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log({name: name});
  console.log({list: list});
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, list: list } );
});

module.exports = router;