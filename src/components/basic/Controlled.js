import { useState } from "react";

const Controlled = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={ e => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={ e => setAge(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Controlled;