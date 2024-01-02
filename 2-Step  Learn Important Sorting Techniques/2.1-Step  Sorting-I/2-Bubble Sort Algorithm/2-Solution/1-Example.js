function bubbleSort(arr) {
    // Bubble sort
    const n = arr.length;
    for (let i = n; i >= 0; i--) {
        let didSwap = false;
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                didSwap = true;
            }
        }
        if (!didSwap) {
            break;
        }
    }

    console.log(`After Using insertion Sort : ${arr.join(" ")}`);
}

// Example usage
const arr = [13, 46, 24, 52, 20, 9];
console.log(`Before Using insertion Sort : ${arr.join(" ")}`);

bubbleSort(arr);