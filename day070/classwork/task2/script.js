// შექმენით HTML-ში ფორმა სადაც მომხმარებელს შემოატანინებთ თავის სრულ სახელს, ემაილს, პაროლს, საყვარელ ფერს. შემდეგ javascirpt-ის დახმარებით მოახდინეთ form-ის ვალიდაცია, როდესაც sumbit ღილაკზე დაკლიკება მოხდება შეამოწმეთ ყველა ველი შევსებულია თუ არა, შესაბამისად დაუბეჭდეთ რომ ყველა ველი შევსებულია ან არ არის შევსებული. კომენტარებით ახსენით ყველაფერი

const form = document.getElementById('form');
const btn = document.getElementById('btn');

function validateForm() {
    let name = form.elements.name.value;
    let email = form.elements.email.value;
    let password = form.elements.password.value
    let favoriteColor = form.elements.favoriteColor.value;

    if(name == '' || email == '' || password == '' || favoriteColor == '') {
        alert('Please fill in all fields');
        return;
    } 

    console.log('Form submitted successfully');
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Favorite color: " + favoriteColor);
}

btn.onclick = validateForm;