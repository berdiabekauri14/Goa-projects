// შექმენით პარაგრაფი, რომლის საწყისი ტექსტი იქნება 0. მის ქვემოთ შექმენით ერთი ღილაკი, რომლის ყოველ დაკლიკებაზე counter ცვლადს ერთი მოემატება და ეს რიცხვი გახდება პარაგრაფის textcontent

let counter = 0

function count() {
    counter++
    document.getElementById('paragraph').textContent = counter
}