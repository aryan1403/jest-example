import { useState } from "react"

export default function Counter() {
    const [counter, setcounter] = useState(0);
    return <>
    <h1 data-testid="counter">{counter}</h1>
    <button data-testid="incbtn" onClick={() => setcounter(counter+1)}>INCREMENT</button>

    <h1 data-testid="counterasync">{counter}</h1>
    <button data-testid="incbtnasync" onClick={
        () => setTimeout(() => setcounter(counter+1), 1000)
        }>INCREMENT</button>
    </>
}