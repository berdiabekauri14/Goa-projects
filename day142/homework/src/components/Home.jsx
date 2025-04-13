export default function Home() {
    return (
        <div className=" text-center bg-blue-700 text-white">
            <h1 className=" text-shadow-white underline"><i>Berdia Bekauri</i></h1>
            <br />
            <nav>
                <a href="#about" className=" text-shadow-white underline m-2 scroll-smooth">About</a>
                <a href="#contact" className=" text-shadow-white underline m-2 scroll-smooth">Contact</a>
                <a href="#signup" className=" text-shadow-white underline m-2 scroll-smooth">Sign up</a>
                <a href="#login" className=" text-shadow-white underline m-2 scroll-smooth">Login</a>
            </nav>
            <br />
            <a href="#about"><button className=" bg-white text-blue-700 m-2 scroll-smooth cursor-pointer">See more</button></a>
        </div>
    )
}