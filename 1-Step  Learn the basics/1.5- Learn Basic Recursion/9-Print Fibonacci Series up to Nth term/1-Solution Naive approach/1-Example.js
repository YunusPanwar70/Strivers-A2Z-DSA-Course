function genrateFibonacci(n) {
    if (n === 0) {
        console.log(0);
    } else if (n === 1) {
        console.log(0, 1);
    } else {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        console.log(`The Fibonacci Series up to ${n}th term:`);
        console.log(fib.join(' '));
    }
}

genrateFibonacci(5);