function value(num) {
    for (let i = 0; i < num; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += " ";
        };
        for (let k = 0; k < 2 * (num - i) - 1; k++) {
            row += "*";
        };
        console.log(row);
    };
};

value(5);

//  *********
//   *******
//    ***** 
//     ***    
//      *