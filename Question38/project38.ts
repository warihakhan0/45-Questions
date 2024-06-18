function describe_cities(city:string = "karachi", country:string = "Pakistan"):void{
    console.log(`${city} is in ${country}`);
}
describe_cities();
describe_cities("tokyo", "Japan");
describe_cities("Paris", "France");
describe_cities("sydney", "Australia")