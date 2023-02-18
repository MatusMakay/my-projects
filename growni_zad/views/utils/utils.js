const {get_organisation} = require('../models/model.js')

//user = {name:name, type:type}
function create_htmlrow_element(index, user_name, user_type, place_holder){

    let row = `<div class="flexbox-row" id="id${index}_row${place_holder}"> `
    
    // column with username
    row+=`<div class="flexbox-item user_name" id="id${index}_username${place_holder}"> <p>${user_name}</p> </div>`
    
    // column with userinfo
    row+=`<div class="flexbox-item user_info"> <p>${user_type}</p> </div>`
    
    //columnt with button
    row+=`<div class="flexbox-item user_delete" onclick="identify(${index}, ${place_holder})"> </div>`

    row+=`</div>`

    
    return row
}

function create_manage_content(org_members, org_creators){
    // fix here!!!
    let content = ""
    let place_holder = 0

    org_members.forEach(members => {
        
        content += `<div class="wrapper_content" id="show${place_holder}"><h1>Clenovia </h1>`
        content += create_htmlrow_element(0, org_creators[place_holder], "autor organizacie", place_holder)
        console.log(members)
        for(i=0; i < members.length; i++){
            content += create_htmlrow_element(i+1, members[i][0], "clen organizacie" ,place_holder) 
        }    
        content += `<ul class="btns"><li><a onclick="manage_show(false, ${place_holder})">Zavri</a></li></ul>`

        content += "</div>"

        place_holder++
    });

    return content
}


async function create_holder_btns(org, index){
    
    let holder = ""
    org_detail = await get_organisation(org)
    // array of [name, id]
    org_mem = org_detail.member

    let names = ""
    org_mem.forEach(member => {
        if(member[1] != org_detail.createdById){
            names += member[0] + ", "
        }
        else{
            org_creator = member[0]
        }
    });

    holder = `<div class="user_holder"><p class="org_name">${org}</p><hr class="holder"><p id="place_holder${index}">${names + org_creator}</p></div>`
    holder += ` <ul class="btns"><li><a href="">Pridaj</a></li><li><a onclick="manage_show(true, ${index})">Modifikuj</a></li></ul>`
    
    org_mem = org_mem.filter(value => value[0] != org_creator)
    
    return [holder, org_mem, org_creator]
}

async function populate_content_render_page(orgs, user, res){
    let org_members = []
    let org_creators = []
    let org_content = ""
    let i = 0

    if(!orgs){
        res.render('home', {
            org_content: "",
            actual_user: user.username,
            manage_content: "",
        })
        return
    }

    var prom = new Promise((resolve,reject) => orgs.forEach(async (org,index) => {
        //array of [content, members, creator]
        tmp = await create_holder_btns(org, index)
        org_content += tmp[0]
        org_members.push(tmp[1])
        org_creators.push(tmp[2])
        i++

        if (i == orgs.length ) {
            resolve()
        }

    }));
         
     
    prom.then(()=>{
        let manage_content = create_manage_content(org_members, org_creators)
        res.render('home', {
            org_content: org_content,
            actual_user: user.username,
            manage_content: manage_content
        })
    })
    
}

module.exports = {
    populate_content_render_page
}