var express = require('express');
var router = express.Router();
const myApiKey = process.env.MY_API_KEY;

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}`)
    .then(response => response.json())
    .then(data => {
        res.json({movies : data.results })
    })
})
module.exports = router;
