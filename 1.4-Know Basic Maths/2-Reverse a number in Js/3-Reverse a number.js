// For first digit: 1
// num = num*10 + 1 = 0*10 + 1 = 1;

function reverseNumber(n) {
    let num = n;
    let reverse = 0;
    while (n !== 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    };
    console.log(`The revesre of ${num} is ${reverse}`);
};

reverseNumber(1);