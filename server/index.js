const path = require('path')
const express = require('express')
const app = express()
const indexRoute = require('./routes/index-route')
const asteroidsRoute = require('./routes/asteroids-route')
const magnitudeRoute = require('./routes/magnitude-route')
const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '..', 'client', 'public')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

app.use(express.static(publicPath))

// require routes
app.use(jsonParser)

magnitudeRoute(app)
asteroidsRoute(app)
indexRoute(app)

// run the server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});