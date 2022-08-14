function getAdmins(map){
    let admins = [];
    for([key, value] of map ){
        if(value === "Admin"){
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set("Rafael", "Admin");
users.set("Sarah", "User");
users.set("Joao", "User");

console.log(getAdmins(users));