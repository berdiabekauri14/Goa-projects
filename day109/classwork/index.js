// 2) შექმენით ფუნქცია რომელსაც გადაეცემა მინ 2 და მაქსიმუმ უთვალავი ელემენტი, პირველი არგუმენტი უნდა იყყოს ფუნქცია და დანარჩენი არგუმენტი ინტეჯერები, მაგ func(add, 1,7,2,1), add, minus, mulitply

const func = (func, arr) => {
    const appendElements = prompt("Enter the amount of elements: ");
    for (let i = 0; i < appendElements; i++) {
        const indexName = prompt(`Enter the ${i}th elements name: `);
        const copy = [indexName];

        return arr.push(copy);
    }
}