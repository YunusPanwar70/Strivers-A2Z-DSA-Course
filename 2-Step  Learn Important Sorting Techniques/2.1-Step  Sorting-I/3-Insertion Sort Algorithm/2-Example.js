function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    console.log(`After Using insertion Sort : ${arr.join(" ")}`);

}

let arr = [5, 4, 3, 2, 1];
console.log(`Before Using insertion Sort : ${arr.join(" ")}`);

insertionSort(arr);