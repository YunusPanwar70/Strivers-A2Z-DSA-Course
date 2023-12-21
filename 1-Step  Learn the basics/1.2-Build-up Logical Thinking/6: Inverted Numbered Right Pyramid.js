function value(num) {
    // for (let i = num; i >= 1; i--) {
    //     let row = "";
    //     for (let j = 1; j <= i; j++) {
    //         row += j
    //     };
    //     console.log(row);
    // };
    for (let i = 0; i < num; i++) {
        let pattern = '';
        for (let j = 1; j <= num - i; j++) {
            pattern += j
        }
        console.log(pattern);
    }
};

value(6);

// 12345
// 1234
// 123
// 12
// 1