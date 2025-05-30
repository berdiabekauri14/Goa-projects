export default function Login() {
    return (
        <form>
            <h1>Login</h1>
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" />
            <br />
            <button>Submit</button>
        </form>
    )
}