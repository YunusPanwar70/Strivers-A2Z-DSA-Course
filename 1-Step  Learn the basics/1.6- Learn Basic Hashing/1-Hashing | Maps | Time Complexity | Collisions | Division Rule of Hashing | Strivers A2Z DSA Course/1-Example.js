const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the size of the array: ", function(n) {
    let arr = [];
    rl.question("Enter the array elements separated by space: ", function(inputArr) {
        arr = inputArr.split(' ').map(Number);

        // precompute:
        let hash = Array(13).fill(0);
        for (let i = 0; i < n; i++) {
            hash[arr[i]] += 1;
        }

        rl.question("Enter the number of queries: ", function(q) {
            for (let i = 0; i < q; i++) {
                rl.question("Enter a number to query its frequency: ", function(number) {
                    // fetching:
                    console.log(hash[number]);
                });
            }
            rl.close();
        });
    });
});

rl.on("close", function() {
    process.exit(0);
});