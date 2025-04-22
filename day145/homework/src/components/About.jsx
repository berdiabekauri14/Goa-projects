import img from "./assets/img.png"

export default function About() {
    return (
        <div className=" text-center">
            <h1>About</h1>
            <br />
            <img src={img} alt="img" />
            <br />
            <p>My name is berdia bekauri, i am 12 years old. my hobbies are programming, science, playing chess, maths and physics. my programming languages are python, c language, javascript, react and node.js</p>
        </div>
    )
}