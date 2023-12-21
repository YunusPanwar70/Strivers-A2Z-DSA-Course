function countFreq(arr) {
    let visited = new Array(arr.length).fill(false);
    let maxFreq = 0,
        minFreq = arr.length;
    let maxEle = 0,
        minEle = 0;

    for (let i = 0; i < arr.length; i++) {
        if (visited[i])
            continue;

        let count = 1;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                visited[j] = true;
                count++;
            }
        }
        if (count > maxFreq) {
            maxEle = arr[i];
            maxFreq = count;
        }
        if (count < minFreq) {
            minEle = arr[i];
            minFreq = count;
        }
    }
    console.log(`The highest frequency element: ${maxEle}`);
    console.log(`The highest frequency element: ${minEle}`);
}

let arr = [10, 5, 10, 15, 10, 5];
countFreq(arr);