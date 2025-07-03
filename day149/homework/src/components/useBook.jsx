import { useEffect, useState } from "react";

export default function useBook() {
    const [book, setBook] = useState("")

    const bookCar = () => {
        setBook(`You booked a ${book}`)
    }

    useEffect(() => {
        setBook(`You booked a ${book}`)
    }, [book])

    return { book, bookCar }
}