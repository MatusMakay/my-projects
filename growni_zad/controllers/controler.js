const {random, floor} = require('math')

const {get_user, get_organisation, update_user_org} = require('../models/model.js')
const {populate_content_render_page} = require('../utils/utils')

async function GET_home(req, res){

    //user_id=[0..6]
    user_id = floor(random() * 7)

    user = await get_user(user_id)

    // radsej 2x dopytovat alebo vytvorit pole 
    // pamat vs siet
    org = user.org

    populate_content_render_page(org, user, res)
}

async function DELETE_user(req, res){
    username = req.body[0]
    org_name = req.body[1]

    org = await get_organisation(org_name)
    
    user = []

    //delete from array
    try{
        org.member = org.member.filter((element, index) => {
            if (element[0] == username){
                user = element
            }
    
            return element[0] != username
        })
    }
    catch(TypeError){
        res.status(404)
        res.send("no organisations for current user")
        return
    }
    

    db_user = await get_user(user[1])

    console.log(user[1])

    db_user.org = db_user.org.filter(element => element != org_name)

    update_user_org(db_user, user[1], org, org_name)

    res.status(204)
    res.send()
}

module.exports = {
    GET_home,
    DELETE_user,
}