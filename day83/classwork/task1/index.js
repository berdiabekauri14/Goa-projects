// 1) შექმენით reduce მეთოდის კლონი, იქონიეთ რიცხვების მასივი, ჯერ გამოიყენეთ თვითონ  reduce მეთოდი და ნახეთ როგორ  მუშაობს (გაიგეთ რიცვთა ჯამი,ნამრავლი) შემდეგ კი შექმენით მისი კლონი

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc, cur) => {
    return acc + cur
}, 10);

const manualReduce = (arr, func, startingValue = 0) => {
    let acc = startingValue;

    for(const value of arr){
        acc = func(acc, value);
    }

    return acc;
}

console.log(manualReduce(numbers, (acc, cur) => acc + cur, 10))