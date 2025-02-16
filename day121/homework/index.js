const func1 = (func2) => {
    console.log(func2("Berdia"))
}

console.log(func1((name) => {
    setTimeout(() => {
        console.log(name);
    }, 2000);
}))