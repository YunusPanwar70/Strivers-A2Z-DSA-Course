function factorial(x) {
    let ans = 1;
    for (let i = 1; i <= x; i++) {
        ans = ans * i;
    };
    return ans
};

console.log(`The factorial of 3 is ${factorial(3)}`);