const keys = require('../config/keys')
const axios = require('axios')

// Magnitude route
module.exports = (app) => {
    app.post('/api/magnitude', (req, res) => {
       axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.body.dateEnd}&end_date=${req.body.dateStart}&api_key=${keys.nasaApiKey}`).then(r => {
            const highestMagnitudeArray = []
            Object.keys(r.data.near_earth_objects).map(date => {
                r.data.near_earth_objects[date].map(magnitude => {
                    highestMagnitudeArray.push({
                        name:magnitude.name,
                        magnitude:magnitude.absolute_magnitude_h,
                        diameter:magnitude.estimated_diameter.kilometers.estimated_diameter_max,

                    })
                })
            })
            
            highestMagnitudeArray.sort((a, b) => (a.magnitude < b.magnitude) ? 1 : -1)
        
            
            
            return res.send(JSON.stringify(highestMagnitudeArray.slice(0,5)));
        })
       
    })
}