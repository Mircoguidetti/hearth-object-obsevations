const keys = require('../config/keys')
const axios = require('axios')

// Asteroids route
module.exports = (app) => {
    app.post('/api/asteroids', (req, res) => {
        const date = req.body.date
       axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${keys.nasaApiKey}`).then(r => {
            return res.send(JSON.stringify(r.data.near_earth_objects[date]));
        })
       
    })
}