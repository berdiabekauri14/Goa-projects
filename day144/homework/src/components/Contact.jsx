export default function Contact() {
    return (
        <div className=" text-center">
            <h1>Contact</h1>
            <form>
                <input type="text" className=" border-black border-2 outline-0" name="name" placeholder="enter your name" required />
                <br />
                <input type="email" className=" border-black border-2 outline-0" name="email" placeholder="Enter your email" required />
                <br />
                <textarea name="message" className=" border-black border-2 outline-0" placeholder="enter your message" required></textarea>
                <br />
                <button className=" border-black border-2 cursor-pointer">Submit</button>
            </form>
        </div>
    )
}