var current_users = ["sarah", "zarah", "dua", "saba", "ausaf"];
var new_user = ["mansha", "rabia", "zarah", "sarah", "kiswa"];
var lowercased_current_users = current_users.map(function (users) { return users.toLowerCase(); });
new_user.forEach(function (new_user) {
    if (lowercased_current_users.includes(new_user.toLowerCase())) {
        console.log("The username ".concat(new_user, " is already taken, please enter a new user name"));
    }
    else {
        console.log("The username ".concat(new_user, " is available"));
    }
});
