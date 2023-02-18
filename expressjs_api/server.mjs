import Express from 'express'

import { getHomePage } from './controllers/getHomePage.controller.mjs'
import { messagesRouter } from './routes/messages.router.mjs'
import { friendRouter } from './routes/friends.router.mjs'

// server setup
const app = Express()
const PORT = 3000

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

//creates body json object
app.use(Express.json())

app.use('/site', Express.static('public'))

/* 
    ******************************    
    Midleware End
    
*/



/* 
    Routes
    ******************************
*/

app.get('/', getHomePage)
app.use('/friends', friendRouter)
app.use('/messages', messagesRouter)
app.get('/home', (req, res) => {
    res.render('index', {
        title: 'My friends',
        heading: 'Hello there',
    })
})
/* 
    ******************************
    Routes
*/

app.listen(PORT, () => {
    console.log(`App is running on port = ${PORT}`)
})