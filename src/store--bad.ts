//importing a store directly is dangerous. instead should import with context to ensure Effect & Memos behave properly

import { createStore } from "solid-js/store";
import { createRoot, createMemo, Accessor } from "solid-js";

export const [todos, setTodos] = createStore<{text: string, completed: boolean}[]>([]);

export const addTodo = (text: string) => {
    setTodos([...todos, { text: text, completed: false}]);
}   

export const funkyTodos : Accessor<string[]> = createMemo<string[]>(() => {
    let funkyTodos = [];
    for(let todo of todos){
        funkyTodos.push(todo.text + " funky")
    }
    return funkyTodos;
})

