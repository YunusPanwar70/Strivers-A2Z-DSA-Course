function isPalindrome(s) {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (!isAlphanumeric(s[left]))
            left++;
        else if (!isAlphanumeric(s[right]))
            right--;
        else if (toLowerCase(s[left]) !== toLowerCase(s[right]))
            return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}

function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

function toLowerCase(char) {
    return char.toLowerCase();
}


function main() {
    let str = "ABCDCBA";
    let ans = isPalindrome(str);

    if (ans) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

main();