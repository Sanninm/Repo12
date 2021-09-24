// Only change code below this line
var Array1 = [1];
var Array2 = [1, 2, 3, 4];
var Array3 = [1, 2, 3, 4];
var Array4 = [1, 2, 3, 4, 5, 6];
function myRecursion(arr, n) {
    Array1 = [...arr];
    Array2 = [...arr];
    Array3 = [...arr];
    Array4 = [...arr];
if (n === 0){ 
    return 0;
} else {
return myRecursion(arr, n-1)*arr[n-1];
}
}

// Only change code above this line
console.log(myRecursion(Array1, 0));
console.log(myRecursion(Array2, 2));
console.log(myRecursion(Array3, 3));
console.log(myRecursion(Array4, 5));
module.exports = myRecursion;