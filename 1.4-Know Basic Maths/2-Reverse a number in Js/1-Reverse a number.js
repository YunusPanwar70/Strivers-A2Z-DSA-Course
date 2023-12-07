function reverseNumber(n) {
    let num = n;
    let reverse = 0;
    while (n !== 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    };
    console.log(`The reverse of ${num} is ${reverse}`);
};

reverseNumber(123);