// შემოგდით n და n ზომის მასივი. დაბეჭდეთ მასივის ორი უდიდესი ელემენტის ჯამი.
// მაგ 5, 18 12 40 1 19
// პასუხია 40+19=59.

let arr = [5, 18, 12, 40, 1, 19];

let max1 = arr[0];
let max2 = arr[1];

for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i] > max2) {
        max2 = arr[i];
    }
}

console.log(max1 + max2);