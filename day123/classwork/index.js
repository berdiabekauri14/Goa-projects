const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Task 1 complete");
    }, 2000)
})

promise
    .then(resolve => console.log(resolve));