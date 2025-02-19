const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Task 3 failed");
    }, 2000);

    resolve("Task 3 complete");
})))