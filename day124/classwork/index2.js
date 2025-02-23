const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error");
    }, 1000);
})

promise.catch(reject => console.log(reject));