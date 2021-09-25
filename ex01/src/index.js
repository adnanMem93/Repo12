// Only change code below this line
var result = 0;
var final = 0;
function myRecursion(arr, n) { 

if (n === 0) {
    return final;
} else {

result = result + arr[n - 1];
if (n === 1) {
final = result;
result = 0;
}
return myRecursion(arr, n - 1);
}
}

// Only change code above this line


console.log(myRecursion([1], 0)); // Change this line//
console.log(myRecursion([1, 2, 3, 4], 2)); // Change this line//
console.log(myRecursion([1, 2, 3, 4], 3)); // Change this line
console.log(myRecursion([1, 2, 3, 4, 5, 6], 5)); // Change this line

module.exports = myRecursion;
