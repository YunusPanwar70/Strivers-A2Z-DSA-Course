function func(i, n) {
    if (i < 1)
        return;
    console.log(i);

    func(i - 1, n);
};

function main() {
    let n = 4;
    func(n, n);
    return 0;
};

main();