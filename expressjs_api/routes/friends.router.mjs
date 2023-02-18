import Express from 'express'

import { getFriend, getFriends } from '../controllers/getFriends.controller.mjs'
import { addFriend } from '../controllers/addFriend.controller.mjs'

const friendRouter = Express.Router()

friendRouter.get('/', getFriends)

// create param in req.params object
//url/:param
friendRouter.get('/:friendId', getFriend)

friendRouter.post('/', addFriend)


export{
    friendRouter
}