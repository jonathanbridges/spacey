const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {

  const getSpaceLaunchNews = () => {
    let url = 'https://spacelaunchnow.me/api/3.3.0/event/?format=json';
    return axios.get(url).then(response => response.data);
  };

  getSpaceLaunchNews().then(data => {
    res.json({
      message: "Request received!",
      data: data.results
    })
  })

});

module.exports = router;
