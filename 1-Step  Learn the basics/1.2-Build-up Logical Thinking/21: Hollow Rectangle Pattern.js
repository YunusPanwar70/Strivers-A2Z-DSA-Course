function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= rows; j++) {
            if (i === 1 || i === rows || j === 1 || j === rows) {
                pattern += '*';
            } else {
                pattern += ' ';
            }
        }

        console.log(pattern);
    }
}
printPattern(4);


// ****
// *  *
// *  *
// ****