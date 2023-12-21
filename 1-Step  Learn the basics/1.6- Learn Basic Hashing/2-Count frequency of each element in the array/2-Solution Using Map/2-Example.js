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
        console.log(`${key}  ${value}`);
    }
}

let arr = [2, 2, 3, 4, 4, 2];
frequecy(arr);