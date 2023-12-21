function func(i, n) {
    if (i > n)
        return;
    console.log("Raj");

    func(i + 1, n)
};

func(1, 4);