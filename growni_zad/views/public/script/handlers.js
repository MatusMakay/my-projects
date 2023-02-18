const API_PORT = "http://localhost:3000"

function DELETE_user(username, org_name){
    wasdeleted = false
    //todo POST REQUEST ON BACKEND API
    obj = {
        "name": username
    }
    fetch(`${API_PORT}/home`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify([username, org_name])
      })

    return wasdeleted
}

function getName(value, place_holder){
    id = "id" + value + "_username" +place_holder
    return document.getElementById(id).innerText
}

function getRowElement(value, place_holder){
    id = "id" + value + "_row" + place_holder
    return document.getElementById(id)
}

function delete_from_place_holder(username, place_holder){
    let element = document.getElementById("place_holder" + place_holder)
    
    let string = element.innerText

    string = string.replace(`${username},`, "")
    string = string.replace(`${username}`, "")
    
    if(string == ""){
        string = "Nikto"
    }

    let org_name = element.previousSibling.previousSibling.innerText
    element.innerText = string

    return org_name
}

function manage_show(value, place_holder){
    const element = document.getElementById("show"+place_holder)
    if(value){
        element.style.visibility = "visible";
    }
    else{
        element.style.visibility = "hidden";
    }
    console.log(value)
}

function hide_org(org_name){
    document.getElementById(org_name).style.display = "none"
}

function was_act_user_deleted(username){
    let act_user = document.getElementById('act_user').innerText
    if (username == act_user){
        return true
    }
    
    return false
}

var identify = function(value, place_holder) {
    console.log(value, place_holder)
    row = getRowElement(value, place_holder)
    username = getName(value, place_holder)

    row.remove()
    org_name = delete_from_place_holder(username, place_holder)

    DELETE_user(username, org_name)

};
