function nonPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        };
    };
    return true;
};

let n = 26;
let ans = nonPrime(n);

if (n !== 1 & ans === true) {
    console.log("Prime Number");
} else {
    console.log(`${n} is Not Prime Number`);
};