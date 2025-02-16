const prompT = prompt("Enter your name: ");

const func1 = (func2) => {
    console.log(func2())
}

console.log(func1(func2(() => {
    setTimeout(() => {
        console.log(`You helped him ${prompT}!`);
    })
})))