const signup = document.getElementById("signup");
const auth = document.getElementById("auth");
export const dataBase = [];

export function signUp() {
    const name = signup.name.value;
    const email = signup.email.value;
    const password = signup.password.value;
    const comfirm = signup.comfirm.value;

    if (comfirm != password) {
        alert("Comfirm password incorrect");
        return;
    }

    alert("You have signed up!");

    dataBase.push({
        name: name,
        email: email,
        password: password
    })
}

export function Authorize() {
    const anwser = auth.anwser.value;

    if (anwser != 5) {
        alert("Incorrect anwser, Try again");
        return;
    }

    alert("Correct anwser, Looks like you are not an robot");
}