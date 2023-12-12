function value(num) {
    // for (let i = num; i >= 1; i--) {
    //     let row = "";
    //     for (let j = 1; j <= i; j++) {
    //         row += "*"
    //     };
    //     console.log(row);
    // };
    for (let i = 0; i < num; i++) {
        let pattern = '';
        for (let j = 0; j < num - i; j++) {
            pattern += '*'
        }
        console.log(pattern);
    }
};

value(5);

// *****
// ****
// ***
// **
// *