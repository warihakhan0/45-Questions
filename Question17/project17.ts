let list = ["Sarah", "Mansha", "Noreen", "Dua","Vanshika", "Zoya"];
let newLine = "I can only invite two people for dinner";
// list.pop();
console.log(list.pop(),"I am soo sorry i can't invite you at dinner because my table won't arrive");
console.log(list.pop(),"I am soo sorry i can't invite you at dinner because my table won't arrive");
console.log(list.pop(),"I am soo sorry i can't invite you at dinner because my table won't arrive");
console.log(list.pop(),"I am soo sorry i can't invite you at dinner because my table won't arrive");
// console.log(list);
for(let i = 0; i < list.length; i++){
    console.log(list[i],"You are still invited");
}
let remove = list.splice(0,2);
console.log(list);