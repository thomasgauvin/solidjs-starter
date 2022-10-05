import { Component, For, createSignal } from 'solid-js';
import todoStore from "../store";
const { todos, setTodos, addTodo, funkyTodos } = todoStore;
// import { todos, setTodos, addTodo, funkyTodos } from "../store--bad";

export const TodoMirror: Component = () => {
    const [input, setInput] = createSignal("");
    const handleInput = (e: InputEvent) => {
        const target = e.target as HTMLInputElement
        setInput(target.value);
    }

    return(
        <div style={{
            margin: "0 1em"
        }}>
            <h1>Mirror Todo List</h1>
            <For each={todos}>{(todo, i) => 
                <div>
                    {todo.text}
                </div>
            }
            </For>
            <p>Input value: <i>{input()}</i></p>
            <input value={input()} onInput={(e) => handleInput(e)}></input>
            <button onClick={() => addTodo(input())}>Submit</button>
        </div>
    )
}