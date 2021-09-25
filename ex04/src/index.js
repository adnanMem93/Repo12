// Only change code below this list
function sumFibonacci(num){
  var prev = 0;
  var curr = 1;
  var sum = 0;
  while(curr <= num){
      if (num === 1) {
          sum = 1;
      }
      else if (curr % 2 !== 0) {
          sum += curr;
      }
      curr += prev;
      prev = curr - prev;
  }
  return sum;
}
// Only change code above this list


console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;