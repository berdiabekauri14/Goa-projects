const promise1 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5000);

    setTimeout(() => {
        if (random < 500) {
            resolve("Hello, World!");
        }

        resolve("Goodbye, World!");
    }, random)
})

promise1.then(resolve => console.log(resolve))

const promise2 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5000);

    setTimeout(() => {
        if (random < 500) {
            resolve("Hello, Berdia!");
        }

        resolve("Goodbye, Berdia!");
    }, random)
})

promise2.then(resolve => console.log(resolve))

const promise3 = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5000);

    setTimeout(() => {
        if (random < 500) {
            resolve("Hello, GOA!");
        }

        resolve("Goodbye, GOA!");
    }, random)
})

promise3.then(resolve => console.log(resolve))