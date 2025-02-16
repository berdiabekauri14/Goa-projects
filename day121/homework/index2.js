const func1 = (message, func2) => {
    setTimeout((message) => {
        console.log(message);
    }, 2000)

    console.log(func2());
}

console.log(func1(() => {
    console.log("setTimout process has ended");
}))