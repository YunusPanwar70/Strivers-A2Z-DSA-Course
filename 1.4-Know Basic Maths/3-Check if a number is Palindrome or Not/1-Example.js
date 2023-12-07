function reverse(X) {
    let Y = 0;
    let dummy = X;

    while (X > 0) {
        // Extract the last digit
        let digit = X % 10;
        // Appending the last digit
        Y = Y * 10 + digit;
        // Shrinking X by discarding the last digit
        X = Math.floor(X / 10);
    };

    return { Y, dummy };
};

// Example usage
let X = 121;
let { Y, dummy } = reverse(X);

if (dummy === Y) {
    console.log("Palindrome Number");
} else {
    console.log("Not Palindrome Number");
};