const express = require("express");
const router = express.Router();
const axios = require("axios");
const keys = require("../../config/keys");

router.get('/spacelaunchnow', (req, res) => {

  const getSpaceLaunchNews = () => {
    let url = 'https://spacelaunchnow.me/api/3.3.0/event/?format=json';
    return axios.get(url).then(response => response.data.results);
  };

  getSpaceLaunchNews().then(data => {
    data.sort((a, b) => b.id - a.id);
    res.json({
      message: "Request received!",
      data
    })
  })

});

router.get('/hubblesite', (req, res) => {

  const getHubbleSiteNews = () => {
    let url = 'http://hubblesite.org/api/v3/external_feed/esa_feed?page=all';
    return axios.get(url).then(response => response.data);
  };

  getHubbleSiteNews().then(data => {
    res.json({
      message: "Request received!",
      data
    })
  })

});

router.get('/tweets/:handle?', (req, res) => {

  const getTweets = () => {
    let url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.handle}&tweet_mode=extended`;
    let token = keys.twitterToken;
    return axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
      .then(response => response.data);
  };

  getTweets().then(data => {
    data = data.slice(0, 5);
    res.json({
      message: "Request received!",
      data
    })
  })

});

module.exports = router;
