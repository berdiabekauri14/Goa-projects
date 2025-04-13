export default function Signup() {
    const form = document.querySelector("form");
    const database = [];

    const handleClick = () => {
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const comfirm = form.Comfirm.value;

        if (name === "" || email === "" || password === "" || comfirm === "") {
            alert("Incorrect, Please enter in all fields");
            return;
        } else if (comfirm != password) {
            alert("Incorrect, Comfirm password doesnt equal the password you created");
            return;
        }

        database.push({
            Name: name,
            Email: email,
            Password: password
        })

        alert("Account created, Check the console to see the data base");

        console.log(JSON.stringify(database))
    }

    return (
        <div className=" text-center" id="signup">
            <h1>Sign up</h1>
            <form>
                <input type="text" className=" border-black border-2 outline-0 p-2 m-2" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" className=" border-black border-2 outline-0 p-2 m-2" name="email" placeholder="Enter your email" required />
                <br />
                <input type="password" className=" border-black border-2 outline-0 p-2 m-2" name="password" placeholder="Create a password" />
                <br />
                <input type="password" className=" border-black border-2 outline-0 p-2 m-2" name="Comfirm" placeholder="Comfirm your password" />
                <br />
                <button type="button" className=" bg-green-500 text-white cursor-pointer" onClick={handleClick}>Submit</button>
                <br />
                <a href="#login" className=" scroll-smooth">Already have an Account? <i>Login</i></a>
            </form>
        </div>
    )
}