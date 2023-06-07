import { useState } from "react";

export function Welcome()
{
    
    const [message, setMessage] = useState('Welcome to my Site');

    function Handler(){
        setMessage('Thanks for Subscribing');
    }

    return(
        <>
        <p>{message}</p>
        <button onClick={Handler}>Subscribe</button>
        </>
    )
}

export default Welcome