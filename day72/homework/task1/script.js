//  შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი

const array = [];

function numbers(end) {
    for (let start = 0; start < end; start++) {
        array.push(start);
    }

    return array;
}

console.log(numbers(10))