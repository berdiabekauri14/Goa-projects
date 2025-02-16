// შექმენით დივ ბლოკი, რომლის ზომა იქნება 400x400px. ცალკე შექმენით 5 ღილაკი - პირველს დაუწერეთ red, მეორეს blue, მესამეს pink, მეოთხეს black, მეხუთეს კი green. ღილაკების ტექსტის შესაბამისად, მათ დაკლიკებაზე უნდა იცვლებოდეს დივ ბლოკის backgroung ფერი. მაგალითად, თუ დააკლიკებთ ღილაკზე, რომელსაც უწერია green, დივ ბლოკის ფერი უნდა გახდეს მწვანე

let box = document.getElementById('box')

function changeColorToRed() {
    box.style.backgroundColor = 'red'
}

function changeColorToBlue() {
    box.style.backgroundColor = 'blue'
}

function changeColorToPink() {
    box.style.backgroundColor = 'Pink'
}

function changeColorToBlack() {
    box.style.backgroundColor = 'black'
}

function changeColorToGreen() {
    box.style.backgroundColor = 'green'
}