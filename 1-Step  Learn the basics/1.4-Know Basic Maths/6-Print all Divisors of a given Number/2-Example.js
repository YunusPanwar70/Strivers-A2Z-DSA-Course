function printDivisorsBruteForce(n) {
    console.log(`Since ${n} is a prime number, only 1 and ${n} are printed.`);
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            process.stdout.write(i + " ");
        };
    };
    console.log("\n");
};

printDivisorsBruteForce(97);