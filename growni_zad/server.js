/**
 * Library
 */
const http = require('http')
const {app} = require('./app.js')
const variables = require('./env/variables')

const PORT = process.env.PORT || variables.PORT;

const server = http.createServer(app);

/**
 * METHODS
 * ****************
 */
async function startServer() {

    server.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
    })  
    
}

startServer()
