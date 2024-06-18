function show_magician(magician: string[]):void{
    magician.forEach(magician => {
        console.log(magician);
    })
}
let magicians:string[] = ["Laura", "Sabi", "Dald"];
show_magician(magicians);