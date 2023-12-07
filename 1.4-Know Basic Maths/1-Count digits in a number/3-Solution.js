function countDigits(n) {
    let digits = Math.floor(Math.log10(n) + 1);
    return digits
};

console.log("Number of digits is " + countDigits(12345));