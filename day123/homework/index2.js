const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    let num = Math.random(1, 5);
    
    setTimeout(() => {
        resolve("Task 1 complete");
    }, Number(String(num + "000")))

    reject("Task 1 failed");
})))