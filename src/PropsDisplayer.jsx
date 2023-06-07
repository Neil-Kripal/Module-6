function PropsDisplayer(props)
{
    let keyvaluePairofProper = JSON.stringify(props);
    return(
        <h2>{JSON.stringify(keyvaluePairofProper)}</h2>
    )
}

export default PropsDisplayer;