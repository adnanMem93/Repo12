var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};


// Keep a copy of the collection for tests
var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    var data = object;
    if (prop !== "tracks" && value !== "") {
        data[id][prop] = value;
    } else if (prop === "tracks" && !data[id].tracks) {
        data[id].tracks = [];
        data[id].tracks.push(value);
    } else if (prop === "tracks" && value !== "") {
        data[id].tracks.push(value);
    } else if (value === "") {
        delete data[id][prop];
    }
    return data;
    // Only change code above this line
}

console.log(updateRecords(collection, 5439, "artist", "ABBA"));
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on me"));
console.log(updateRecords(collection, 5439, "artist", ""));
console.log(updateRecords(collection, 5439, "tracks", "Addicted to Love"));

module.exports = updateRecords;