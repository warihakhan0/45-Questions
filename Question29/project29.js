var favourite_fruits = ["Mango", "Apple", "Lichi"];
// if(favourite_fruits.includes("Mango")){
//     console.log("I really like Mangoes")
// }else if(favourite_fruits.includes("Watermelon")){
// }else if(favourite_fruits.includes("Apple")){
//     console.log("I really like Apple")
// }else if(favourite_fruits.includes("Lichi")){
//     console.log("I really like Lichi")
// }else if(favourite_fruits.includes("Cherry")){
//     console.log("I really like Cherry");
// }
if (favourite_fruits.includes("Mango" || "Lichi" || "Apple")) {
    favourite_fruits.forEach(function (fruit) {
        console.log("I really like ".concat(fruit));
    });
}
else {
    console.log("I don't really like it");
}
