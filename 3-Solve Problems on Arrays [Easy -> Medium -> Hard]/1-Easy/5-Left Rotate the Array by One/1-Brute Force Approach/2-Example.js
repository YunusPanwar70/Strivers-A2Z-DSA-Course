function solve(arr, n) {
    let temp = new Array(n);

    for (let i = 1; i < n; i++) {
        temp[i - 1] = arr[i]
    }
    temp[n - 1] = arr[0]
    for (let j = 0; j < n; j++) {
        console.log(temp[j] + " ");
    }
    console.log();
}

let n = 1;
let arr = [3];
solve(arr, n)