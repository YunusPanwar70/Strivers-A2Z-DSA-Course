function reverse(arr, start, end) {
    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateEletoRight(arr, n, k) {
    reverse(arr, 0, n - k - 1);

    reverse(arr, n - k, n - 1);

    reverse(arr, 0, n - 1);
}

function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let n = 7;
    let k = 2;
    rotateEletoRight(arr, n, k);

    console.log(`After Rotating the k elements to right`);

    for (let i = 0; i < n; i++) {
        console.log(arr[i]);
        console.log(end);
        return 0;
    }
}
main()