function func(n) {
    if (n == 0) {
        return 0;
    };
    return n + func(n - 1);
};

console.log(`Result: ${func(3)}`);