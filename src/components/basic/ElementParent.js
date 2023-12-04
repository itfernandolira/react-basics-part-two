import ElementChild from "./ElementChild";

const elementParent = () => {
    let nome = '?';
    let idade = 0;
    let nerd = false;

    function parentInfo(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam;
        idade = idadeParam;
        nerd = nerdParam;

        console.log(nome,idade,nerd);
    }

    return (
        <div>
            <p>Parent</p>
            <span>{nome} </span>
            <span><strong>{idade} </strong></span>
            <span>{ nerd ? 'Verdadeiro!' : 'Falso!'}</span>
            <ElementChild aoClicar={parentInfo}></ElementChild>
        </div>
    )
}

export default elementParent;