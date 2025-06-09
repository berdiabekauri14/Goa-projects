export default function Component() {
    const p = document.getElementById("p")

    const On = () => {
        p.textContent = "ON"
    }

    const Off = () => {
        p.textContent = "OFF"
    }

    return (
        <div>
            <button onClick={On}>ON</button>
            <button onClick={Off}>OFF</button>

            <p id="p">OFF</p>
        </div>
    )
}