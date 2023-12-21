function countDigits(n) {
    let x = n.toString();
    return x.length;
};

console.log(`Number of digits in ${ countDigits(12345) }`);