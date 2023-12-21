function countFreq(arr) {
    let visited = {};

    for (let i = 0; i < arr.length; i++) {
        if (visited[arr[i]]) {
            continue;
        }

        let count = 1;
        for (let j = i - 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                visited[arr[j]] = true;
                count++;
            }
        }
        console.log(`${arr[i]}  ${count}`);
    }
}

let arr = [2, 2, 3, 4, 4, 2];
countFreq(arr);