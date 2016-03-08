var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(express.static('public'));



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

// router.get('/', function (req, res) {
//   var tweets = tweetBank.list();
//   console.log(tweets);
//   res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
// });

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(typeof name);
  var tweets = tweetBank.find( {name: name} );
  console.log({name: name});
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, name: name} );
});

router.get('/tweet/:id', function(req, res) {
  var tweetId = Number(req.params.id);
  console.log(tweetId);
  var tweet = tweetBank.find( {id: tweetId} );
  res.render( 'index', { title: 'Tweet #:'+tweetId, singleTweet: tweet} );
});






module.exports = router;