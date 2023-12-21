let count = 0;

function func() {
    if (count === 3)
        return;
    console.log(count);
    count++;
    func();
}

func();