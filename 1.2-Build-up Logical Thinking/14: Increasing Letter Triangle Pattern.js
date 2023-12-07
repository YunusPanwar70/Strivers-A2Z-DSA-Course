function charPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let pattern = "";
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(65 + j);
        }
        console.log(pattern);
    };
};

charPattern(5);

// A
// A B
// A B C
// A B C D
// A B C D E