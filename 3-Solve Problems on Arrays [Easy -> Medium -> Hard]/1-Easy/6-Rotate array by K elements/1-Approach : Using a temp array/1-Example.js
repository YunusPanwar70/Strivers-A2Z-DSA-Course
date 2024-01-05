function rotateRight(arr, n, k) {
    if (n === 0) {
        return;
    }
    k = k % n;
    if (k > n) {
        return;
    }
    const temp = [];
    for (let i = n - k; i < n; i++) {
        temp[i - n + k] = arr[i];
    }
    for (let j = n - k - 1; j >= 0; j--) {
        arr[j + k] = arr[j];
    }
    for (let m = 0; m < k; m++) {
        arr[m] = temp[m]
    }
}

let n = 7;
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;

rotateRight(arr, n, k);
console.log(`After Rotating the elements of right ${arr.join(" ")}`);