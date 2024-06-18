var animals = ["cat", "lion", "panther"];
animals.forEach(function (animal) {
    if (animal === "cat") {
        console.log("".concat(animal, " would make a great pet"));
    }
    else {
        console.log("".concat(animal));
    }
});
