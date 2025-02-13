// Create a form with a textarea input. Display a character counter below the textarea that updates in real-time as the user types. The counter should show the number of characters entered out of a maximum limit (e.g., "50/200 characters").

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('input', updateCounter);

function updateCounter() {
    const currentLength = textarea.value.length;
    const maxLength = parseInt(textarea.getAttribute('maxlength'));

    counter.textContent = currentLength;

    if (currentLength > maxLength) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'black';
    }
}