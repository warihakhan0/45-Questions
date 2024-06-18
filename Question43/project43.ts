function show_magic(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`);
}


let magician_names = ["Harry Poter", "Hmaza", "Usman"];

let copy_magician_names = magician_names.slice();
let copy_great_magicians = make_great(copy_magician_names);


show_magic(magician_names);
show_magic(copy_great_magicians);