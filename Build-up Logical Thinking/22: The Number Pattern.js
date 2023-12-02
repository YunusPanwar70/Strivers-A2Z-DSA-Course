// 6 6 6 6 6 6 6 6 6 6 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 2 1 2 3 4 5 6 
// 6 5 4 3 2 2 2 3 4 5 6 
// 6 5 4 3 3 3 3 3 4 5 6 
// 6 5 4 4 4 4 4 4 4 5 6 
// 6 5 5 5 5 5 5 5 5 5 6 
// 6 6 6 6 6 6 6 6 6 6 6

function printPattern(n) {
    const size = 2 * n - 1;
    const matrix = [];

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.min(i, j, size - i - 1, size - j - 1) + 1;
        }
    }

    for (let i = 0; i < size; i++) {
        let row = "";
        for (let j = 0; j < size; j++) {
            row += matrix[i][j] + " ";
        }
        console.log(row);
    }
}

printPattern(6);