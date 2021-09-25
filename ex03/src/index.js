// Only change code below this line

var result = [];
var final = [];
function rangeOfNumbers(startN, endN) {

if (startN == endN) {
    result.push(startN);
    final = result;
    result = [];
    return final;
}


if (startN > endN) {
    return "The..";
} else {

result.push(startN);  
return rangeOfNumbers(startN + 1, endN);
}
}

// Only change code above this line


console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); // Change this line
console.log(rangeOfNumbers(5, 5)); // Change this line
console.log(rangeOfNumbers(7, 5)); // Change this line

module.exports = rangeOfNumbers;