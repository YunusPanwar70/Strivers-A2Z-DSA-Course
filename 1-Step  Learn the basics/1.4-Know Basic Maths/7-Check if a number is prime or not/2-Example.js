function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        };
    };
    return true
};

let n = 3;
let ans = isPrime(n);

if (n !== 1 && ans === true) {
    console.log(`${n} Prime Number`);
} else {
    console.log("Non Prime Number");
};