function func(i, n) {
    if (i < 1)
        return;
    console.log(i);

    func(i - 1, n);
};

func(4, 4);