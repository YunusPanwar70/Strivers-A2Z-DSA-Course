function charPattern(rows) {
    for (let i = 0; i <= rows; i++) {
        let pattern = "";
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(65 + (rows - i) + j)
        };
        console.log(pattern);
    };
};

charPattern(4);

// E
// D E 
// C D E 
// B C D E 
// A B C D E