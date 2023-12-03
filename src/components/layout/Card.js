import './Card.css'

const card = props => {
    return (
        <div className='Card'>
            <div className='Title'>{props.title}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}

export default card;
