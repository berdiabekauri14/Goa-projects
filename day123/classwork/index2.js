const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000)

    reject("Task 2 failed");
})

promise
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))