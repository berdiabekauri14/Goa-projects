export default function Contact() {
    const conta = document.getElementById("conta");

    const handleClicker = () => {
        const name = conta.name.value;
        const email = conta.email.value;
        const message = conta.message.value;
        const database = []

        if (name === "" || email == "" || message == "") {
            alert("Incorrect, Please enter in all fields");
            return;
        }

        alert("Message sent, check the console to see the database");

        database.push({
            Name: name,
            Email: email,
            Message: message
        })

        console.log(JSON.stringify(database))
    }

    return (
        <div id="contact" className=" text-center">
            <h1>Contact</h1>
            <br />
            <form id="conta">
                <input type="text" className=" border-black border-2 outline-0 p-2 m-2" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" className=" border-black border-2 outline-0 p-2 m-2" name="email" placeholder="Enter your email" required />
                <br />
                <textarea name="message" className=" border-black border-2 outline-0 p-2 m-2" placeholder="Enter your message"></textarea>
                <br />
                <button type="button" className=" bg-green-800 text-white cursor-pointer" onClick={handleClicker}>Submit</button>
            </form>
        </div>
    )
}