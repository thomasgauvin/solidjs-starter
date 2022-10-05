import { render } from 'solid-js/web';
import { createSignal, createMemo } from 'solid-js';

function fibonacci(num: number) : number {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

export function Fibonacci() {
  const [count, setCount] = createSignal(0);

  const fibDerivedSignal = () => {
    console.log("fibDerivedSignal function executed every time fib() called, which can cause lag for large operations")
    return fibonacci(count());
  }
  const fibMemo = createMemo(() => {
    console.log("fibDerivedSignal function executed every time count() is updated")
    return fibonacci(count());
  })
  return (
    <>
        <h1>Fibonacci</h1>
      <button onClick={() => setCount(count() + 1)}>Count: {count()}</button>

        {/* With derived signals */}
      <div>Fibonacci {fibDerivedSignal()} {fibDerivedSignal()} {fibDerivedSignal()} {fibDerivedSignal()} {fibDerivedSignal()}</div>

        {/* With memo */}
      <div>Fibonacci {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()} {fibMemo()}</div>

    </>
  );
}
