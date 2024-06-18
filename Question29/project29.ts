let favourite_fruits = ["Mango", "Apple", "Lichi"];

if(favourite_fruits.includes("Mango" || "Lichi" || "Apple")){
    favourite_fruits.forEach((fruit)=>
        {
            console.log(`I really like ${fruit}`);
        }
    )
}else{
    console.log("I don't really like it");
}