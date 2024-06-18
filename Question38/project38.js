function describe_cities(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_cities();
describe_cities("tokyo", "Japan");
describe_cities("Paris", "France");
describe_cities("sydney", "Australia");
