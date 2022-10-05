import { Component, createSignal } from 'solid-js';

export const Timer: Component = () => {
    const[timer, setTimer] = createSignal(0);

    setInterval(() => setTimer(timer() + 1), 1000);

    return(
        <>
            <h1>Timer: {timer()}</h1>
        </>
    )
}