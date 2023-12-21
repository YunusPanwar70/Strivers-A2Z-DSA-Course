function value(num) {
    for (let i = 0; i <= num; i++) {
        let row = "";
        for (let j = 0; j < num - i; j++) {
            row += " ";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            row += "*";
        }
        console.log(row);
    }

    for (let a = num - 1; a > 0; a--) {
        let row1 = "";
        for (let b = 0; b < num - a; b++) {
            row1 += " ";
        }
        for (let c = 0; c < 2 * a - 1; c++) {
            row1 += "*";
        }
        console.log(row1);
    }
}

value(4);


//      *
//     ***
//    ***** 
//   *******
//  *********
//  *********
//   *******
//    ***** 
//     ***    
//      *