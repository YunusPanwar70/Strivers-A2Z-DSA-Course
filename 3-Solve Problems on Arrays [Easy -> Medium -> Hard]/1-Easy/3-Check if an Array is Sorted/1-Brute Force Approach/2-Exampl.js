function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i])
                return false;
        }
    }
    return true
}
const arr = [5, 4, 6, 7, 8];
const ans = isSorted(arr);
if (ans) console.log("True");
else console.log("Fasle");