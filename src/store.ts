//importing a store directly is dangerous. instead should import with context to ensure Effect & Memos behave properly

import { createStore } from "solid-js/store";
import { createRoot, createMemo, Accessor } from "solid-js";

function todoStore() {
    const [todos, setTodos] = createStore<{text: string, completed: boolean}[]>([]);

    const addTodo = (text: string) => {
        setTodos([...todos, { text: text, completed: false}]);
    }   

    const funkyTodos : Accessor<string[]> = createMemo<string[]>(() => {
        let funkyTodos = [];
        for(let todo of todos){
            funkyTodos.push(todo.text + " funky")
        }
        return funkyTodos;
    })

    return {todos, setTodos, addTodo, funkyTodos}
}

export default createRoot(todoStore);