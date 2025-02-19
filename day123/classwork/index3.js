const promise = new Promise((resolve) => {
    const num = 7;

    resolve(7 + 7);
})

promise
    .then(resolve => console.log(resolve))