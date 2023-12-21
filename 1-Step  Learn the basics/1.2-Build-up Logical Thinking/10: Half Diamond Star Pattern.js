function value(num) {
    for (let i = 1; i <= num; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*"
        };
        console.log(row);
    };

    for (let a = num; a >= 1; a--) {
        let row1 = "";

        for (let b = 1; b <= a; b++) {
            row1 += "*"
        };
        console.log(row1);
    };
};

value(5);

//  *
//  **
//  *** 
//  ****
//  *****
//  ****
//  ***    
//  **
//  *