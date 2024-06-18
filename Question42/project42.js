function show_magicians(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
function make_Great(show_magician) {
    show_magician.forEach(function (magician) {
        console.log("The Great ".concat(magician));
    });
}
var magician = ["Laura", "Sabi", "Dald"];
make_Great(magician);
