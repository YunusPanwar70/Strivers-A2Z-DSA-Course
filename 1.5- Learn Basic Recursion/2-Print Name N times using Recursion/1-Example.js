function func(i, n) {
    if (i > n)
        return;
    console.log("Raj");

    func(i + 1, n)
};

function main() {
    let n = 4;
    func(1, n);
};

main();