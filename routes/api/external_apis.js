const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/spacelaunchnow', (req, res) => {

  const getSpaceLaunchNews = () => {
    let url = 'https://spacelaunchnow.me/api/3.3.0/event/?format=json';
    return axios.get(url).then(response => response.data.results);
  };

  getSpaceLaunchNews().then(data => {
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

module.exports = router;
