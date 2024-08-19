// შექმენით ფორმა სადაც გექნებათ სახელი, გვარი და ემაილი. როდესაც დადასრტურდება ფორმა ეს მონაცემები უნდა შეინახოთ ახალ ობიექტში, ხოლო ახალი შექმნილი ობიექტი უნდა წამოიღოთ მასივში, გამოიყენეთ external js, კოდი ახსენით კომენტარების საშვალებით

const form = document.getElementById("form");
const btn = document.getElementById('button');

const dataBase = [];

function validateForm() {
    let name = form.elements.name.value;
    let lastName = form.elements.lastName.value;
    let emailValue = form.elements.email.value;

    if(name == '' || lastName == '' || emailValue == '') {
        alert('Please fill in all fields');
        return;
    } 

    const acc = {
        name: name,
        surname: lastName,
        email: emailValue
    };

    dataBase.push(acc);

    console.log(dataBase);

}

btn.onclick = validateForm;