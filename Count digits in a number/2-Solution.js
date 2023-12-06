function countDigits(n) {
    let x = n.toString();
    return x.length;
}

let n = 12345;
console.log("Number of digits in " + n + " is " + countDigits(n));