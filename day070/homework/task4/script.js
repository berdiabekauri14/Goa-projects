// Create a form with a dropdown menu (select element) that has options like "Red," "Blue," and "Green." When the user selects an option, display the selected color in a <div> below the form.

let box = document.getElementById('box')
let dropDown = document.getElementById('dropDown')

dropDown.addEventListener('input', () => {
    box.style.backgroundColor = dropDown.value
})