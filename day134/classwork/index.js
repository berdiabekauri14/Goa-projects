// 1)

arr = [50, 40, 12, 20.2]

const turnToGeorgian = el => {
    console.log(el / 2.75)
}

const result = arr.reduce(turnToGeorgian)

console.log(result)

// 2)

const arr = ["Hello", "Ana", "Level", "Up"]

const newArr = el => {
    if (reverse(el) != el) {
        arr.remove(el)
    }

    console.log(arr)
} 

const result2 = arr.reduce(newArr)

console.log(result2)

// 3)

const numbers = ["597647272", "555407070", "59823797567"]

const digits = el => {
    console.log(el.slice(4, Null))
}

const result3 = arr.reduce(digits)

console.log(result3)

// 4)

let matrix = [[1, 2, 3], [4, 5 ,6], [7, 8, 9]]

const toObj = el => {
    matrix = `matrix1: ${el}`

    console.log(Object(matrix))
}

const result4 = matrix.reduce(toObj)

console.log(result4)

// 5)

const obj = [
    {
        name: "berdia",
        last: "bekauri",
        score: 100
    },

    {
        name: "Nikoloz",
        last: "Tchitadze",
        score: 100
    },

    {
        name: "saba",
        last: "bekauri",
        score: 0
    }
]

const sortedByScore = el => {
    for (let i = 0; i < obj.length(); i++) {
        if (el >= i) {
            obj[0] = el;
        }

        obj[i] = el;
    }  
    
    console.log(obj)
}

const result5 = obj.reduce(sortedByScore)

console.log(result5);

