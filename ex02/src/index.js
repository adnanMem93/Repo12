// Only change code below this line

var result = [];
var final = [];

function myCounter(n) {

if (n < 1) {
result = [];
    return final;
} else {
if (n === 1) {
   final = result;
}
result.push(n);
return myCounter(n - 1);
}
}

// Only change code above this line

console.log(myCounter(-1)); // Change this line
console.log(myCounter(10)); // Change this line
console.log(myCounter(5)); // Change this line

module.exports = myCounter;