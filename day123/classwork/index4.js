const func = promise => {
    promise
        .then(resolve => console.log(resolve))
}

console.log(func(new Promise(resolve => {
    setTimeout(() => {
        resolve("First");
    }, 2000)

    setTimeout(() => {
        resolve("Second");
    }, 1000);
})))