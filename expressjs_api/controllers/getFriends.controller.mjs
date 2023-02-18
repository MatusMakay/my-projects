import {model} from '../models/friends.model.mjs'

// create param in req.params object
//url/:param
function getFriend(req, res) {


    const friendId = req.params.friendId
    
    model.map((elem) => {
        if(elem.id == friendId){
            return res.json(elem)
        }
    })

    res.status(404).json({
        error: "Friends doesn't exist"
    })
}

function getFriends(req, res){
    console.log('sending friends')
    res.json(model)
}

export {
    getFriend,
    getFriends
}