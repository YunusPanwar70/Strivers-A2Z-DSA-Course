function charPattern(row) {
    for (let i = 0; i <= row; i++) {
        let pattern = "";
        for (let j = 0; j <= i; j++) {
            pattern += String.fromCharCode(65 + i);
        };
        console.log(pattern);
    };
};

charPattern(4);

// A 
// B B
// C C C
// D D D D
// E E E E E