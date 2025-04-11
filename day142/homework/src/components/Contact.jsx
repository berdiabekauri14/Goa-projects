export default function Contact() {
    const afterClick = () => {
        console.log("Contact");
    }

    return (
        <div>
            <h1 className=" text-gray-500">Welcome to component page</h1>
            <button className=" italic: bg-black: text-white" onClick={afterClick}>Click me</button>
        </div>
    )
}