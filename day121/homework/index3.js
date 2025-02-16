const arr = [2, 3, 4, 5];

const func1 = (func2) => {
    console.log(func2());
}

console.log(func1(() => {
    result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(i * i);
        console.log(result);
    }
}))