export default function Home() {
    return (
        <div className=" bg-blue-700 text-white text-center">
            <h1 className=" text-shadow-white underline"><i>Berdia Bekauri</i></h1>
            <br />
            <nav>
                <a href="#about" className=" text-shadow-white m-2">About</a>
                <a href="#contact" className=" text-shadow-white m-2">Contact</a>
            </nav>
            <br />
            <a href="#about"><button className=" bg-white text-blue-700 cursor-pointer m-2">See more</button></a>
        </div>
    )
}