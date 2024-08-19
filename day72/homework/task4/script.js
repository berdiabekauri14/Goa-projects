// შექმენით form სადაც გექნებათ 3 შესატანი ველი, სახელი, ემაილი და პაროლი, თქვენი დავალეება როდესაც ფორმა დადასტურდება წამოიღთ ჯავასკრიპტში დადასტურებული მნიშნელობები ინპუთებიდან, შექმენით მასივი სახელად dataBase  ხოლო ყოველი დადასტურებული ინფორმაცია შეინახეთ ამ მასივში ობიექტის სახით, დააუმატეთ უსაფრთხოების ფუნქციონალი სადაც გამოიყენებთ for ციკლს, სანამ დაემატება მასივში ობიექტი იქამდე შეამოწმეთ არსებობს თუ არა ისეთი ობიექტი მასივში რომელიც ტოლია ახლად დადასტურებული ფორმის ემაილის, თუ ტოლია ალერტით გამოუტანეთ რომ ექაუნთი არსებობს, თუ არაა ტოლი მაშინ ალერტით გამოუტანეთ რომ ექაუნთი წარმატებით შექიმნა

const dataBase = [];
const form = document.getElementById("form");
const button = document.getElementById('btn');

function validateForm() {
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (name === "" || email === "" || password === "") {
        alert("Incorrect, Please enter in all fields");
        return;
    }

    while (dataBase.push({
        Name: name,
        Email: email,
        Password: password
    })) {
        if (name === "berdia" && email === "email@gmail.com" && password === "berdia123") {
            alert("Account has been taken");
            return;
        } else if (name === "berdia" || email == "email@gmail.com" || password === "berdia123"); {
            alert("Account has been taken");
        }
        if (name !== "berdia" && email !== "email@gmail.com" && password !== "berdia123") {
            alert("Account has been created");
        }
        break;
    }

    dataBase.push({
        Name: name,
        Email: email,
        Password: password
    });

    console.log(dataBase);
}

button.onclick = validateForm;