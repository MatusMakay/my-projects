import {model} from '../models/friends.model.mjs'

function addFriend(req, res){
    
    if(!req.body.name){
        return res.status(400).json({
            error:'Missing friend name',
        })
    }

    const newFriend = {
        name : req.body.name,
        id : model.length
    }

    model.push(newFriend)

    res.json(newFriend)

    console.log('everything is ok ')
}

export{
    addFriend
}