function rangeOfNumbers(startN, endN) {
    if (endN >= startN) {
        var len = endN - startN + 1;
        var a = new Array(len);
	for (let i = 0; i < len; i++) a[i] = startN + i;
	return a;
}
 else { 
    return "The string number will always be less than or equal to the ending number";
}
}
console.log(rangeOfNumbers(1,7));
console.log(rangeOfNumbers(3,10));
console.log(rangeOfNumbers(5,5));
console.log(rangeOfNumbers(7,5));
module.exports = rangeOfNumbers;