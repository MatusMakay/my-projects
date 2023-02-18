const express = require('express')
const path = require('path')

const { router } = require('./routes/router')

/**
 * express setup
 */
const app = express()

// set rendering engine
app.set('view engine', 'hbs')
app.set('views', 'views')


/* 
    Midleware 
    ********************************
*/
app.use((req, res, next) => {
    
    const date = Date.now();
    //call next app.use middleware 
    next()

    const time = Date.now() - date

    console.log(`${req.method} ${req.baseUrl}${req.url} ${time}ms`)

})

app.use('/', express.static(path.join(__dirname, 'public')))

//creates body json object
app.use(express.json())

/* 
    Routes
    ******************************
*/
app.get('/home', router)
app.delete('/home', router)
module.exports={
    app
}