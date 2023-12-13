function factorial(x) {
    let ans = 1;
    for (let i = 1; i <= x; i++) {
        ans = ans * i;
    };
    return ans
};

function main() {
    let result = factorial(3);
    console.log(`The factorial of 3 is ${result}`);
}

main();