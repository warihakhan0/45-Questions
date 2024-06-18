let current_users = ["sarah", "zarah","dua", "saba", "ausaf"];
let new_user=["mansha", "rabia", "zarah" ,"sarah","kiswa"]

let lowercased_current_users = current_users.map(users => users.toLowerCase());
new_user.forEach(new_user => {
    if(lowercased_current_users.includes(new_user.toLowerCase())){
        console.log(`The username ${new_user} is already taken, please enter a new user name`)
    }else{
        console.log(`The username ${new_user} is available`)
    }
})