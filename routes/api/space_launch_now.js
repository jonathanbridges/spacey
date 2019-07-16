const express = require("express");
const router = express.Router();
const axios = require('axios')

router.get('/', (req, res) => {

  function spaceLaunchNow() {
    return axios.get('https://spacelaunchnow.me/api/3.3.0/event/?format=json')
      .then(response => {
        return response.data
      }
    );
  }

  spaceLaunchNow().then(data => {
    res.json({
      message: "Request received!",
      data
    })
  })

});

module.exports = router;
