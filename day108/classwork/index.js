// შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა განმეორებად ელემეტს მასივში ან სტრინგში.
// 'hannah' -> false
// 'abbia' -> "i"

const func = (str) => {
    let strLength = [str]
    let result = "";

    for (let i = 0; i < str[strLength.length]; i++) {
        if (str[i] === i) {
            return false;
        }

        result = str[i];
    }

    return result;
}

console.log(func("berdia"));