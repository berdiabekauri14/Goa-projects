export default function About() {
    const clicked = () => {
        console.log("About");
    }

    return(
        <div>
            <h1 className=" text-green-800">Welcome to component page</h1>
            <button className=" italic" onClick={clicked}>Click me</button>
        </div>
    )
}