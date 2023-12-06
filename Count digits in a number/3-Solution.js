function countDigits(n) {
    let digits = Math.floor(Math.log10(n) + 1);
    return digits;
}

let n = 12345;
console.log("Number of digits in " + n + " is " + countDigits(n));