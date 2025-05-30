export default function Contact() {
    const form = document.querySelector("form");
    const database = []

    const handleSubmit = () => {
        const name = form.name.value;
        
        if (name === "") {
            alert("Incorrect, please fill the field");
            return;
        }

        database.push({
            Name: name
        })

        console.log(database)

        alert("Added to database");
    }

    return (
        <div>
            <h1>contact</h1>
            <br />
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <br />
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}