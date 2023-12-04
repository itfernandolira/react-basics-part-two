import ElementChild from "./ElementChild";
import {useState} from 'react';

const ElementParent = props => {
    const [nome, setNome] = useState(props.nome || '?');
    const [idade, setIdade] = useState(props.idade || 0);
    const [nerd, setNerd] = useState(props.nerd || false);

    function parentInfo(nomeParam, idadeParam, nerdParam) {
        setNome(nomeParam);
        setIdade(idadeParam);
        setNerd(nerdParam);

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

export default ElementParent;