import useCounter from "./components/useCounter";

export default function App() {
    const { count, setCount } = useCounter(0);

    const increcment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increcment}>{count}</button>
        </div>
    )
}