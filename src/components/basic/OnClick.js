const onClick = () => {
    
    const clicou = (numero) => {
        console.log(numero);
    }

    return (
        <div>
            <button onClick={ e => clicou(8) }>Click me</button>
        </div>
    )
}

export default onClick;