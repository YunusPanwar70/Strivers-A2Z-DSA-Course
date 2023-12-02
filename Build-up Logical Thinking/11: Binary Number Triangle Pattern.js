function value(num) {
    for (let i = 1; i <= num; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += (i + j) % 2
        };
        console.log(row);
    };
};

value(5);

// 1
// 01
// 101
// 0101
// 10101