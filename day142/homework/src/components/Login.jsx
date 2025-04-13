export default function Login() {
    const log = document.getElementById("log");

    const handleClick = () => {
        const name = log.name.value;
        const email = log.email.value;
        const password = log.password.value;
        const database = [];

        if (name === "" || email === "" || password === "") {
            alert("Incorrect, Please enter in all fields");
            return;
        }

        alert("Logged in, Check the console to see the database");

        database.push({
            Name: name,
            Email: email,
            Password: password
        })

        console.log(JSON.stringify(database));
    }

    return (
        <div id="login" className=" text-center">
            <h1>Login</h1>
            <br />
            <form id="log">
                <input type="text" className=" border-black border-2 outline-0 p-2 m-2" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" className=" border-black border-2 outline-0 p-2 m-2" name="email" placeholder="Enter your email" required />
                <br />
                <input type="password" className=" border-black border-2 outline-0 p-2 m-2" name="password" placeholder="Enter your password" />
                <br />
                <button type="button" className=" bg-green-500 text-white cursor-pointer" onClick={handleClick}>Submit</button>
                <br />
                <a href="#signup" className=" scroll-smooth">Dont have an account? <i>Sign up</i></a>
            </form>
        </div>
    )
}