function count(i, n) {
    if (i > n) {
        return;
    }
    console.log(i);

    count(i + 1, n);
};

count(1, 4);