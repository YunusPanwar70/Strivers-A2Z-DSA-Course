function value(num) {
    for (let i = 1; i <= num; i++) {
        let row = " ";

        for (let j = 1; j <= i; j++) {
            row += i
        };
        console.log(row);
    };
}

value(5);
// 1
// 22
// 333
// 4444
// 55555