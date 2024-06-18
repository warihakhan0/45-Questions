var newList = ["Sarah", "Mansha", "Noreen"];
var prepend = "dua";
console.log(newList.unshift(prepend));
newList.splice(2, 0, "Vanshika");
var append = newList.push("Zoya");
for (var i = 0; i < newList.length; i++) {
    console.log(newList[i], "I found a bigger dinner table so again you are invited at dinner");
}
