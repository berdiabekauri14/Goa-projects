// Objective: Implement real-time validation for a password field. The password should be at least 8 characters long. If the password is too short, display a warning message below the input field.

let form = document.getElementById('form')
let btn = document.getElementById('btn')

function validateForm() {
    let passwordValue = form.element.password.value

    if (passwordValue > 8) {
        console.log("Form was submited")
        console.log(`Password: ${passwordValue.value}`)
    }
    else {
        alert("Incorrect, the password should be at least 8 charachters long")
        return
    }
}