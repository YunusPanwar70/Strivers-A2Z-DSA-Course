// function isArmstrongNumber(n) {
//     let originalNumber = n;
//     let count = 0;
//     let temp = n;

//     // Count the number of digits in the given number
//     while (temp !== 0) {
//         count++;
//         temp = Math.floor(temp / 10);
//     }

//     let sumOfPower = 0;

//     // Calculate the sum of power of digits
//     while (n !== 0) {
//         let digit = n % 10;
//         sumOfPower += Math.pow(digit, count);
//         n = Math.floor(n / 10);
//     }

//     // Check if the sum is equal to the original number
//     return sumOfPower === originalNumber;
// }

// // Example usage
// let n1 = 153;
// if (isArmstrongNumber(n1)) {
//     console.log("Yes, it is an Armstrong Number");
// } else {
//     console.log("No, it is not an Armstrong Number");
// }

function isArmstrongNumber(n) {
    let originalNumber = n;
    let count = 0;
    let temp = n;

    while (n !== 0) {
        count++;
        temp = Math.floor(temp / 10)
    }
}