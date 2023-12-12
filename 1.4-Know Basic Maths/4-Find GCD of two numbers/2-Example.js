// Example 2:
// Input: num1 = 3, num2 = 6
// Output: 3
// Explanation: Since 3 is the greatest number which divides both num1 and num2.

let num1 = 3,
    num2 = 6;
let ans;
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        ans = i
    };
};

console.log(`The GCD of the two numbers is ${ans}`);