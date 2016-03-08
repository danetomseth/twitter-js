var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var bodyParser = require('body-parser');

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
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, name: name, showForm: true} );
});

router.get('/tweets/:id', function(req, res) {
  var tweetId = Number(req.params.id);
  var tweet = tweetBank.find( {id: tweetId} );
  res.render( 'index', { title: 'Tweet #:'+tweetId, singleTweet: tweet} );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  console.log(name);
  console.log(text);
  //tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;