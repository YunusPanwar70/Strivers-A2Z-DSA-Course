function charPattern(rows) {
    for (let i = rows; i >= 0; i--) {
        let pattern = "";

        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(65 + j)
        };
        console.log(pattern);
    };
};

charPattern(5);

// A B C D E 
// A B C D
// A B C
// A B
// A