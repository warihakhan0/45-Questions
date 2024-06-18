var places = [
    { name: "Burj Khalifa", location: "Dubai", type: "Tower" },
    { name: "The Great wall of China", location: "China", type: "landmark" },
];
console.log("List of favourite places:");
places.forEach(function (favoritePlaces) {
    console.log("Name: ".concat(favoritePlaces.name, ",Location: ").concat(favoritePlaces.location, ",Type: ").concat(favoritePlaces.type, " "));
});
