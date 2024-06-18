interface Album{
    artist: string;
    title:string;
    tracks? :number;
}

function make_album(artist:string, title:string, tracks?:number):Album{
    let album: Album = {
        artist:artist,
        title:title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
        return album;
}

let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The dark side of the moon");
let album3 = make_album("Led Zeppelin", "IV");
let album4 = make_album("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
