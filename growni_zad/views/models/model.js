const {db, ref, set, get, child} = require('../service/firebase')

const dbRef = ref(db);

function get_user(user_id){
    return get(child(dbRef, `users/${user_id}`)).then((snapshot) => {
    if (snapshot.exists()) {
        return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
}


function get_organisation(name){
  return get(child(dbRef, `org/${name}`)).then((snapshot) => {
    if (snapshot.exists()) {
       return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}


function update_user_org(user, user_id, org, org_name){
  set(ref(db, 'users/' + user_id), user);
  set(ref(db, 'org/' + org_name), org);
}


function writeUserData(userId, name, org) {
  set(ref(db, 'users/' + userId), {
    username: name,
    org: org,
  });
}

function write_org_data(name, members, creator, membersIds, createdById) {
  set(ref(db, 'org/' + name), {
    member: members,
    creator: creator, 
    memberIds: membersIds,
    createdById: createdById
  });
}

function create_users(){
  let names = ["Matus Makay", "Janka Anka", "Fero Pero", "Alex Pralex", "Frantisek Nero", "Viky Kliky", "Samo Amo"]

  let organisations = [["Zi a nechaj zit", "Ak mas obavy trpis 2x"], ["Zi a nechaj zit"], ["Ak mas obavy trpis 2x"], ["Ak mas obavy trpis 2x"], ["Velka mysel"], ["Velka mysel"], ["Velka mysel"]]

  let i = 0
  names.forEach(name => {
    //console.log(i, name, organisations[i]) 
    writeUserData(i, name, organisations[i])
    i++;
  });

}

function create_org(){

   // Zi a nechaj zit, Ak mas obavy trpis 2x, Velka mysel
   
   //Dilema
   // ci len idcko => zbytocny dopyt po mene aj ked nie je treba
   // ak naparujem mozem zobrazit hned a v pripade kliknutia na konkretneho usera mozem urobit dopyt 
  
  names = ["Zi a nechaj zit", "Ak mas obavy trpis 2x", "Velka mysel"]
  members = [[["Matus Makay", 0], ["Janka Anka", 1]], [["Matus Makay", 0], ["Fero Pero", 2], ["Alex Pralex", 3]], [["Frantisek Nero", 4], ["Viky Kliky", 5], ["Samo Amo", 6]]]
  creators = [["Matus Makay", 0], ["Fero Pero", 2], ["Samo Amo", 6]]

  memberIds = [[0, 1], [0, 2, 3], [4, 5, 6]]
  createdById = [0, 2, 6]

  let i = 0
  members.forEach(inner => {
    write_org_data(names[i], inner, creators[i], memberIds[i], createdById[i])    
    i++

  });

}
create_org()
create_users()

module.exports={
  get_user,
  get_organisation,
  update_user_org,
}