// შექმენით მასივი სადაც გექნებათ 3 ობიექტი: product1,product2,product3. ამ ობიექტებს უნდა ჰქონდეს title და id კუთვნილებები. ამ მასივს უნდა გადაუაროთ და უნდა შექმნათ პროდუქტის ელემენტები რომლებსაც დაამატებთ ვერ გვერდზე

const container = document.getElementById("products");

const productObj = [
    { title: "product1", id: "firstProduct" },
    { title: "product2", id: "secondProduct" },
    { title: "product3", id: "thirdProduct" }
]

for (let i = 0; i < productObj.length; i++) {
    container.appendChild("div");    
}