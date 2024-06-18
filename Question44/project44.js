function sandwich_ingredients() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    items.forEach(function (item) {
        console.log("-".concat(item));
    });
    console.log("Your sandwich is ready! \n");
}
sandwich_ingredients("Ham", "Cheese", "Lettuce");
sandwich_ingredients("turkey", "Tomato", "onion", "Mayo");
sandwich_ingredients("Peanut Butter", "Jelly");
