function printDivisorsBruteForce(n) {
    console.log(`The Divisors of ${n} are:`);
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            process.stdout.write(i + " ");
        }
    }
    console.log("\n");
}

printDivisorsBruteForce(36);