import { Component, createSignal } from 'solid-js';
import { MyComponent } from './components/MyComponent';
import { Counter } from './components/Counter';
import { Timer } from './components/Timer';
import { Fibonacci } from './components/Fibonacci';
import { Todo } from './components/Todo';
import { TodoMirror } from './components/TodoMirror';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <br />
        <MyComponent name="Solid!">
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </MyComponent>
        
        <Counter />
        <br />
        <Timer />
        <br />
        <Fibonacci />
        <br />
        <div style="display: flex;">
        <Todo />
        <TodoMirror />
        </div>

        <br />
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
        <br />
        <br />
      </header>
    </div>
  );
};

export default App;
