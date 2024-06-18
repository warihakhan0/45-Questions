function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("The Beatles", "Abbey Road");
var album2 = make_album("Pink Floyd", "The dark side of the moon");
var album3 = make_album("Led Zeppelin", "IV");
var album4 = make_album("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
