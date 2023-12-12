// Example 2:
// Input: N =  121 
// Output: Palindrome Number
// Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.

function reverse(X) {
    let Y = 0;
    let dummy = X;

    while (X > 0) {
        let digit = X % 10;
        Y = Y * 10 + digit;
        X = Math.floor(X / 10);
    };
    return { Y, dummy }
};

let X = 121;
let { Y, dummy } = reverse(X);

if (dummy === Y) {
    console.log("Palindrome Number");
} else {
    console.log("Not Palindrome Number");
};