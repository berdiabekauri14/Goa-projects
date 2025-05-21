const manualMap = (arr, callBack) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callBack(arr[i]));
    }

    return result
}

const call = manualMap(["Berdia", "Nika", "Data", "Luka", "Zura", "Andria"], (name) => {
    return `My name is ${name}`;
})

console.log(call)