const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    let num = Math.random(1, 4);
    
    setTimeout(() => {
        if (num <= 0.3) {
            reject("Task 3 failed");
        }

        resolve("Task 3 complete");
    }, Number(String(num + "000")))
})))