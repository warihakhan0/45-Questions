function show_magic(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Poter", "Hmaza", "Usman"];
var copy_magician_names = magician_names.slice();
var copy_great_magicians = make_great(copy_magician_names);
show_magic(magician_names);
show_magic(copy_great_magicians);
