function solve(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    };
    console.log(`The sum of the first ${n} number is: ${sum}`);
};

solve(5);