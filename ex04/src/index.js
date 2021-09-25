// Only change code below this line 
function sumFibonacci(num) {
    
 if (num < 0) {
    return [0, 1];
}
 else {
    var array = sumFibonacci(num-1)
    if((array[array.length-1])<num) {
        array.push(array[array.length-1]+array[array.length-2])
}
return array;
}
} 

// Only change code above this line 

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
