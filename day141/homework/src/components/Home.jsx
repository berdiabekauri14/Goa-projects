export default function Home() {
    return (
        <div>
            <h1 className=" text-red-500">Home component page</h1>
            <button className=" bg-green-500" onClick={console.log("Home")}>Click me</button>
        </div>
    )
}