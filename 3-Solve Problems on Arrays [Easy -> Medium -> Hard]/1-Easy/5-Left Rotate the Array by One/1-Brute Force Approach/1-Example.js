function solve(arr, n) {
    let temp = new Array(n);
    for (let i = 1; i < n; i++) {
        temp[i - 1] = arr[i];
    }
    temp[n - 1] = arr[0];
    for (let i = 0; i < n; i++) {
        console.log(temp[i] + " ");
    }
    console.log();
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
solve(arr, n);