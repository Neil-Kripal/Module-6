function Greeting({name, children}) {
    const greetingText = name ? `Hello ${name}` : 'Hello World';

    if (children) {
        return <h1>{children} {greetingText}</h1>
    }

    return <h1>{greetingText}</h1>;
    
}

export default Greeting;