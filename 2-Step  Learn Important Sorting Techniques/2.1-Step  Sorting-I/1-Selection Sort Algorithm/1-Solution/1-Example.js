function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let mini = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    console.log(`After Using insertion Sort : ${arr.join(" ")}`);
}

let arr = [13, 46, 24, 52, 20, 9];
console.log(`Before Using insertion Sort : ${arr.join(" ")}`);
selectionSort(arr);