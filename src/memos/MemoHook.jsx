import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log("Ahí vamos");
    }

    return `${iterationNumber} iteraciones realizadas`;
}


export const MemoHook = () => {
    const { counter, increment } = useCounter()
    const [show, setShow] = useState(true);

    const memorized = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Counte: {counter} </h1>
            <hr />

            <h4>{memorized}</h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={() => setShow(!show)}
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
