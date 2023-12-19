function printArray(ans) {
    console.log("The reversed array is:- ");
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i]);
    };
};

function reverseArray(arr) {
    let n = arr.length;
    let ans = [];
    for (let j = n - 1; j >= 0; j--) {
        ans[n - j - 1] = arr[j]
    };
    printArray(arr);
};

reverseArray([5, 4, 3, 2, 1]);