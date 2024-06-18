//to uppercase
var x = "Wariha";
var y = x.toUpperCase();
console.log(y);
// to lowercase
console.log(x.toLowerCase());
// to title case
function toTitleCase(x) {
    return x.replace(function (x) {
        return x.chartAt(0).toUpperCase() + x.slice(1).toLowercase();
    });
}
console.log(toTitleCase(x));
