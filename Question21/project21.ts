type favoritePlaces = {
    name: string;
    type: string;
    location: string;
}

let places : favoritePlaces[]=[
    { name: "Burj Khalifa", location: "Dubai",type : "Tower" },
    { name : "The Great wall of China", location: "China", type : "landmark"},
]

console.log("List of favourite places:");
places.forEach( favoritePlaces => {
    console.log(`Name: ${favoritePlaces.name},Location: ${favoritePlaces.location},Type: ${favoritePlaces.type} `)
})