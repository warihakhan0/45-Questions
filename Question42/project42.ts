function show_magicians(magician: string[]):void{
    magician.forEach(magician => {
        console.log(magician);
    })
}


function make_Great(show_magician):void{
    show_magician.forEach(magician => {
        console.log(`The Great ${magician}`)
    })
}
let magician:string[] = ["Laura", "Sabi", "Dald"];
make_Great(magician);