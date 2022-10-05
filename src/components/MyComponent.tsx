import { JSX, Component } from 'solid-js';

export const MyComponent : Component<{ children?: JSX.Element, name: string}> = (props: {children?: JSX.Element, name: string}) => {
    return <div>
        <p>Hello {props.name}</p>
        {props.children}
    </div>;
}