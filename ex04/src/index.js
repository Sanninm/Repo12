// Only change code below this line 
function sumFibonacci(num) {
    if (num===1) {
    return (0, 1);
}
 else {
    
    return sumFibonacci(num-1) + sumFibonacci(num-2);
   
}   
}
// Only change code above this line 

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
module.exports = sumFibonacci;
