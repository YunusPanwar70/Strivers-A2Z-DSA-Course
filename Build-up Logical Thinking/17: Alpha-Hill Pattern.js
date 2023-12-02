function charPattern(rows) {
    for (let i = 0; i <= rows; i++) {
        let pattern = "";

        // Add spaces
        for (let j = 0; j < rows - i; j++) {
            pattern += " ";
        }

        // Add characters in ascending order
        for (let k = 0; k <= i; k++) {
            pattern += String.fromCharCode(65 + k);
        }

        // Add characters in descending order (excluding the first character)
        for (let l = i - 1; l >= 0; l--) {
            pattern += String.fromCharCode(65 + l);
        }

        console.log(pattern);
    }
}

charPattern(4);

//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA