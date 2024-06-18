let newList = ["Sarah", "Mansha", "Noreen"];
let prepend = "dua";
console.log(newList.unshift(prepend));
newList.splice(2, 0 , "Vanshika");
let append = newList.push("Zoya");
for(let i =0; i < newList.length; i++){
    console.log(newList[i], "I found a bigger dinner table so again you are invited at dinner");
}
