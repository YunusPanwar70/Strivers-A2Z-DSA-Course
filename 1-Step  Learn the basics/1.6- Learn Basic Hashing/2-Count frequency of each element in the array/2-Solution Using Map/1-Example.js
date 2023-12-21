function frequecy(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    for (let [key, value] of map) {
        console.log(key + " " + value);
    }
}

let arr = [10, 5, 10, 15, 10, 5];
frequecy(arr);