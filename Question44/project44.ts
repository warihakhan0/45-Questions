function sandwich_ingredients(...items:string[]):void{
    console.log("Sandwich Order Summary:");
    items.forEach(item => {
        console.log(`-${item}`);
    });
    console.log("Your sandwich is ready! \n")
}
sandwich_ingredients("Ham", "Cheese", "Lettuce");
sandwich_ingredients("turkey", "Tomato","onion", "Mayo");
sandwich_ingredients("Peanut Butter", "Jelly");