function value(num) {
    for (let i = 1; i <= num; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += j;
        };

        for (let k = 0; k < 2 * (num - i); k++) {
            row += " ";
        };

        for (let l = i; l >= 1; l--) {
            row += l
        };

        console.log(row);
    };
};

value(5);

// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321