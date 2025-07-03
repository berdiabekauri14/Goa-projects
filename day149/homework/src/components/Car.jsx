import useBook from "./useBook";

export default function Car() {
    const { book, bookCar } = useBook();

    return (
        <div>
            <h1>{book ? "" : "Your books will be shown here"}</h1>
            <button onClick={bookCar}>click me</button>
        </div>
    )
}