const func = promise => {
    promise
        .then(resolve => console.log(resolve))
        .catch(reject => console.log(reject))
}

console.log(func(new Promise((resolve, reject) => {
    let num = Math.random(1, 4);
    
    setTimeout(() => {
        reject("Task 3 failed");
    }, Number(String(num + "000")))

    resolve("");
})))