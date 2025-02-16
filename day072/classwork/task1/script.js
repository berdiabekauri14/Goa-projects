// შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება 1 პარამეტი სახელად border (ზღვარი) ფუნქციამ 0-იდან border-ის ჩათვლით უნდა გაიგოს ყველა რიცხვი if პირობითი განცხადების საშვალებით, ეს ყველა ლუწი რიცხვი უნდა შევკრიბოთ და დავაბრუნოთ

function evenSum(border) {
    let sum = 0
    for (let i = 0; i < border; i++) {
        sum += border;
    }

    return sum;
}

console.log(evenSum(10));