// 4) შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1


function manualIndexOf(array, index) {
    if (array.indexOf(index) !== index) {
        return -1;
    }

    return array.indexOf(index);
}

console.log(manualIndexOf(["Element1", "Element2", "Element3"], 0));