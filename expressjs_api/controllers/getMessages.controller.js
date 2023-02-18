const path = require('path')


function getMessages(req, res){
    
    res.render('messages', {
        title:"Message my Friends"
    })
}

module.exports = {
    getMessages
}