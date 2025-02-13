// 2) შექმენით ფუნქცია, რომელიც მასივიდან დუბლიკატ ელემენტებს წაშლის და ახალ უნიკალურ მასივს დააბრუნებს.

const arr = [1, 1, 2, 3, 6, 4, 2];

const removeDuplicates = () => {
    for (let i = 0; i < arr.length; i++) {
        arr.pop(i);
    }

    console.log(arr);
}

removeDuplicates();