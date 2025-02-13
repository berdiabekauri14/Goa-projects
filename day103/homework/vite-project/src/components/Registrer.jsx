import Login from "./Login.jsx";

const Registrer = () => {
    return (
        <div>
            <form>
                <h1>Registrer</h1>
                <input type="email" placeholder="Enter an email" />
                <input type="password" placeholder="Enter an password" />
                <button type="button">Submit</button>
            </form>
            <br />
            <Login />
        </div>
    )
}

export default Registrer;