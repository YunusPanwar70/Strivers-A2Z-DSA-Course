function countDigits(n) {
    // let x = n;
    // let count = 0;
    // while (x !== 0) {
    //     x = Math.floor(x / 10);
    //     count++;
    // }
    // return count;
    const converted = `${n}`;
    // return converted.length
    // let counter = 0;
    // for (let i = 0; i < converted.length; i++) {
    //     if (converted[i]) {
    //         counter++
    //     }5t
    // };
    // return counter
    // const regex = /[0-9]/g;
    // const resutl = converted.match(regex).length;
    // return resutl
    // return Object.values(converted).length
    // return `${n}`.length;
    // return [...converted].length;
    // let counter = 0;
    // for (const key of converted) {
    //     if (Math.abs(key)) {
    //         counter++
    //     }
    // };
    // return counter
}

let n = 1223452;
console.log("Number of digits in " + n + " is " + countDigits(n));