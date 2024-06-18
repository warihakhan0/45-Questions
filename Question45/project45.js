function store_car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var Car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        Car[key] = value;
    });
    return Car;
}
var car1 = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2021], ["sunroof", true]);
var car2 = store_car_info("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
console.log(car1);
console.log(car2);
