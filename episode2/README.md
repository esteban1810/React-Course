# Episode 2: JSX, Components, Props

## What is a component in react?
A component its part of the view that you can reuse as many times as you need. Components help you avoid writing the same code repeatedly with minor differences.

## What is JSX?
JSX is a tool that allows to work with Javascript and HTML, in the same file. It enables you to create components and manage their logic in an easy way.

In React, when you declare a component, you need to capitalize its name
```
const GetHeaderComponent = ()=>{
    return <h1>My Header</h1>;
}
```

To print a variable in an HTML tag, you need to use curly braces '{}'
```
const GetHeaderComponent = ()=>{
    const title = 'My Header';
    return <h1>{title}</h1>;
}
```

When you're writing more than one line code, you need to enclose it with parentheses '()'.
```
const GetHeaderComponent = ()=>{
    return (
        <div>
            <h1>Son</h1>
            <h2>Father</h2>
            <h3>Grandfather</h3>
        </div>
    );
}
```

To use a component within another component, you need to invoke it with the following syntax.

```
function App() {
  return (
    <div className="App">
        <NameComponent/> 
    </div>
  );
}
```

## What are props?
Props contain values assigned to the variables that you can use in your components.
```
function App() {
  return (
    <div className="App">
        <ComponentExample name="Example"/> 
    </div>
  );
}

const ComponentExample = (props)=>{
    return <h1>{props.name}</h1>
}
```

### Note
For numeric values, you enclose them in curly braces like `{3.14}`, for string values, you enclose them in double quotation marks like `"Hola"`.