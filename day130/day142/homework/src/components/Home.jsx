export default function Home() {
    const handleClick = () => {
        console.log("Home");
    }

    return (
        <div>
            <h1 className=" text-green-600: underline">Welcome to component page</h1>
            <button className=" bg-red-500" onClick={handleClick}>Click me</button>
        </div>
    )
}