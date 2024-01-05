function solve(arr, n) {
    let temp = arr[0];

    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
    console.log(arr);
}

let n = 3;
let arr = [1, 2, 3, 4, 5];
solve(arr, n);