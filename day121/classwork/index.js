// 1)

const func = func2 => {
    func2("Berdia");
}

func(name => {
    setTimeout(() => {
        console.log(name);        
    }, 2000);
})

// 2)

const TwoSecondsEarly = func => {
    func("Hello");
}

TwoSecondsEarly(message => {
    setTimeout(() => {
        console.log(message);
    }, 2000)

    console.log("setTimout complete");
})

// 3)

const arraySquare = func => {
    func([1, 2, 3]);
}

arraySquare(arr => {
    setTimeout(() => {
        for (let i = 0; i < arr.length(); i++) {
            console.log(i * i);
        }
    }, 2000)
})

// 4)

// solution in: day121/classwork/task2

// 5)

const outputName = func => {
    func(prompt("Enter your name: "));
}

outputName(name => {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 3000)
})