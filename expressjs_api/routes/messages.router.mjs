import Express from 'express'

import { getMessages } from '../controllers/getMessages.controller.js'

const messagesRouter = Express.Router()

messagesRouter.use((req, res, next) => {
    console.log(req.ip)
    next()
})

messagesRouter.get('/', getMessages )

export{
    messagesRouter
}