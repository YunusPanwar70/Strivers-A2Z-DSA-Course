function printArray(ans) {
    console.log("The reversed array is:- ");
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i] + " ");
    }
}

function reverseArray(arr) {
    let n = arr.length;
    let ans = [];
    for (let i = n - 1; i >= 0; i--) {
        ans[n - i - 1] = arr[i];
    }
    printArray(ans);
}

function main() {
    let n = 5;
    let arr = [10, 20, 30, 40];
    reverseArray(arr);
}

main();
