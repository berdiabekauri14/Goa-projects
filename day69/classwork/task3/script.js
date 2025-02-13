// HTML-ში შექმენით 1 პარაგრაფი და მიანიჭეთ id შემდეგ შექმენით ღილაკი და მიანიჭეთ onclick რომელშიც იქნება ფუნქციის გამოძახება, შექმენით ფუნქცია რომელიც წამოიღებს პარაგრაფის textcontent-ს და შეცვლით "hello"-თი. 

function myFunc() {
    let paragraph = document.getElementById("paragraph")
    paragraph.textContent = "Hello"
}