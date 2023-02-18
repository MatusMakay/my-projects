/**
 * IMPORTS
 * ****************
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

/**
 * CONST
 */
const planetsRouter = require('./routes/planets/planets.router')
const missionsRouter = require('./routes/missions/mission.router')
const app = express();

/**
 * MIDLEWARES
 * **************** 
 */
 app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(morgan('combined'))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

//first check my routes 
app.use(planetsRouter)
app.use(missionsRouter)

//allows frontend to serve all paths which doesn't match paths which i defined in my routers 
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));   
})


/**
 * EXPORT
 */
module.exports = app