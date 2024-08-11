// შექმენით HTML-ში ფორმა სადაც მომხმარებელს შემოატანინებთ თავის სრულ სახელს, ემაილს, პაროლს, საყვარელ ფერს. შემდეგ javascirpt-ის დახმარებით მოახდინეთ form-ის ვალიდაცია, როდესაც sumbit ღილაკზე დაკლიკება მოხდება შეამოწმეთ ყველა ველი შევსებულია თუ არა, შესაბამისად დაუბეჭდეთ რომ ყველა ველი შევსებულია ან არ არის შევსებული. კომენტარებით ახსენით ყველაფერი

let form = document.getElementById('form');
let btn = document.getElementById('btn');

function validateForm() {
    let name = form.element.type.value;
    let email = form.element.email.value;
    let password = form.element.password.value
    let favoriteColor = form.element.type.value;

    if(name == '' || email == '' || password == '' || favoriteColor == '') {
        alert('Please fill in all fields');
        return;
    } 

    console.log('Form submitted successfully');
    console.log("Email: " + emailValue);
    console.log("Password: " + passValue);
}