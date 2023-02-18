variables = require('../env/variables.js')

/**
 * IMPORTS
 * ****************
 */
const http = require('http');
const app = require('./app');
const {loadPlanetsData} = require('./models/planets.model');

/**
 * VARIABLES
 * ****************
 */
//now you can run script node start with cmlarg PORT=x
//when you don't run node start with PORT=x then PORT=8000
const PORT = process.env.PORT || variables.PORT;
const {mongoConnect} = require('./services/mongo')


const server = http.createServer(app);
//once -> only once happend



/**
 * METHODS
 * ****************
 */
async function startServer() {
    await mongoConnect()
    await loadPlanetsData()

    server.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
    })  
}

startServer()









