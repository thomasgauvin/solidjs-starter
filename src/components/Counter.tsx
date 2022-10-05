import { Component, createSignal } from 'solid-js';

export const Counter: Component = () => {
    const [count, setCount] = createSignal(0);
  
    const buttonClick = () => {
      setCount(count()+1);
    }

    // derived signal
    const doubleCount = () => {
        return count() * 2;
    }

    return(
        <>
            <h1>Counter</h1>
            <p>Count is {count()}, Double is {doubleCount()}</p>
            <button onClick={buttonClick}>Increment</button>
        </>
    )
}