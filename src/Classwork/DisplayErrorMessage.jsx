export function DisplayErrorMessage({errorMessage, resetErrorBoundary})
{
    return(
        <>
        <div>
            <h1>Error Occurred: {errorMessage}</h1>
        </div>
        <div>
            <button onClick={() =>resetErrorBoundary()}>Reset</button>
        </div>
        </>
    )
}