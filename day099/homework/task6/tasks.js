// 6) Create a simple to-do list application by building an HTML page with an input field, an "Add Task" button, and an empty <ul> list to display tasks. In a separate tasks.js file, create an array to hold tasks as objects with properties text (string) and completed (boolean). Write functions to add tasks to the array, toggle task completion when clicked, and remove tasks. In app.js, import the functions from tasks.js using ES Modules and set up event listeners for the "Add Task" button and task interactions. Render the tasks dynamically in the DOM and update the list accordingly. Optionally, use local storage to save tasks between page reloads. This task will help you practice working with arrays, objects, DOM manipulation, and ES Modules, laying a strong foundation for React.

const form = document.querySelector("form");
const ul = document.getElementById("tasks");
const message = document.querySelector("span");
const clear = document.querySelector("#delete");

let index = 0;

const App = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const input = form.input.value;
    
        if (input === "") {
            message.textContent = "Incorrect, Please fill the field to add an task";
            return;
        }
    
        ul.innerHTML += `<li id=${index}>${input}</li>`;
    
        index++;
        message.textContent = "";
    
        form.input.value = "";
    
        const clearTasks = () => {
            ul.innerHTML = ``;
        }
    
        clear.onclick = clearTasks;
    })
    
    ul.addEventListener("click", (e) => {
          if (e.target.tagName === "LI") {
              e.target.remove();
          }
    })
}

export default App;