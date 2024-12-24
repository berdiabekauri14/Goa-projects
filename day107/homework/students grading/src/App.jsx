import { useState } from "react";

export default function App() {
  const form = document.querySelector("form");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameInput = form.name.value;
    const gradeInput = form.grade.value;
    const message = document.querySelector("span");
    const students = []

    if (nameInput === "" || gradeInput === "") {
      message.textContent = "Incorrect, please enter in all fields";
      message.style.color = "red";
      return;
    }
  
    students.push({
      name: setName(name),
      grade: setGrade(grade)
    })
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter an students name" />
        <input type="number" name="grade" placeholder="Enter students grade" />
        <span></span>
        <button>Submit</button>
      </form>
      <br />
      <table border={1}>
        <th>Name</th>
        <tr id="names">
            {
              students.map((studentName, index) => {
                return <tr key={index}>{studentName}</tr>
              })
            }
        </tr>
        <br />
        <th>Grade</th>
        <tr id="grades">
            {
              students.map((studentGrade, index) => {
                return <tr key={index}>{studentGrade}</tr>
              })
            }
        </tr>
      </table>
    </main>
  )
}