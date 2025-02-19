const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    let num = Math.random(1, 3);
    let num2 = Math.random(1, 3);

    setTimeout(() => {
        resolve("First");
    }, Number(String(num + "000")))

    setTimeout(() => {
        resolve("Second")
    }, Number(str(num2 + "000")));

    reject("Task 1 failed");
    reject("Tasl 2 failed")
})))