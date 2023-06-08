function Sample()
{
    function Handler()
    {
        alert('Handler Reached')
    }
    return(
        <>
            <div>
                <label>Some Text</label>
            </div>
            <div>
                <button onClick={Handler}>Click</button>
            </div>
        </>
    )
}

export default Sample;