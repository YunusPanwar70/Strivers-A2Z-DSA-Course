// Single Loop

// function value2(num2) {
//     for (let i = 1; i <= num2; i++) {
//         console.log("*****");
//     }
// };
// value2(5);

// Double Loop
function value1(num1) {
    for (let i = 1; i <= num1; i++) {
        let row = ' '
        for (let j = 1; j <= num1; j++) {
            row += "*"
        };
        console.log(row);
    };
};
value1(5);


// *****
// *****
// *****
// *****
// *****