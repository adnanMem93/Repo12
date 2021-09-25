function myNess() {

var myStorage = {

"car": {
    "inside": {

        "glove box": "maps",
        "passanger seat": "crumbs"
    },
    "outside": {
        "trunk": "jack"
    }
}
};

var gloveBoxContents = myStorage.car.inside["glove box"];
return gloveBoxContents;

// Only change code below this line
}


// Only change code above this line


console.log(myNess());
module.exports = myNess;