function factorial(x) {
    let ans = 1;
    for (let i = 1; i <= x; i++) {
        ans = ans * i;
    };
    return ans;
};

function main() {
    let result = factorial(5);
    console.log(`The factorial of 5 is ${result}`);
};

main();