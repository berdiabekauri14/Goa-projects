// 1) შექმენით ფუნქცია სახელად randomError , გამოიყენეთ math.random იმისათვის რომ დააგენერიროთ 1 ან 0, თუ ერთი იქნება არ გამოიწვიოთ ერორ თუ ნული შექმენით ახალი ერორ ობიექტი რომელსაც ისვრით

const randomError = () => { 
    const randomNum = Math.random()

    if (randomNum === 0) {
        throw new Error("error")
    } else {
        console.log("no error")
    }
}

randomError()