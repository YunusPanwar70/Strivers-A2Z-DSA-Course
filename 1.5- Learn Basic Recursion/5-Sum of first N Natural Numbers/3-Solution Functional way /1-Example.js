function func(n) {
    if (n == 0) {
        return 0;
    };
    return n + func(n - 1);
};

function main() {
    let result = func(3);
    console.log(`Result: ${result}`);
    return 0;
};
main();