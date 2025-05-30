export default function Registrer() {
    return (
        <form>
            <h1>Registrer</h1>
            <br />
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />
            <br />
            <button>Submit</button>
        </form>
    )
}