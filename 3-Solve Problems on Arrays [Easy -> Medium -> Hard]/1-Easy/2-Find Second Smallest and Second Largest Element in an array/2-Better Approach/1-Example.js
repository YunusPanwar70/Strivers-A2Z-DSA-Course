function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1);
        return;
    }

    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        small = Math.min(small, arr[i]);
        large = Math.max(large, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < second_small && arr[i] !== small)
            second_small = arr[i];
        if (arr[i] > second_large && arr[i] !== large)
            second_large = arr[i];
    }

    console.log(`Second smallest is ${second_small}`);
    console.log(`Second largest is  ${second_large}`);
}

const arr = [1, 2, 4, 6, 7, 5];
getElements(arr);