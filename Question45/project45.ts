interface car{
    manufacturer: string;
    model: string;
    [key:string]:any;
}

function store_car_info(manufacturer:string, model:string, ...options: [string,any][]): car{
    let Car: car = {
        manufacturer:manufacturer,
        model:model
    };

    options.forEach(([key, value])=> {
        Car[key] = value;
    });
    return Car;
}

let car1 = store_car_info("Toyota", "Camry", ["color", "blue"], ["year", 2021], ["sunroof", true]);
let car2 = store_car_info("Tesla", "Model S", ["color", "red"], ["autopilot", true]);
console.log(car1);
console.log(car2);