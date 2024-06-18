var user_name = ["admin", "user1", "user2", "user3", "user4"];
user_name.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello ".concat(username, ", would like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again"));
    }
});
