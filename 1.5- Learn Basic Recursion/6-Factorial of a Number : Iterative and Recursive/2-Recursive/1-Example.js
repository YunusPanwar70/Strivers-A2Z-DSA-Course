function factorial(n) {
    if (n == 0) {
        return 1;
    };
    return n * factorial(n - 1);
};

function main() {
    console.log(factorial(3));
};

main();