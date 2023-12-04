import { useRef } from "react";

const Uncontrolled = () => {
    const nameRef = useRef();
    const ageRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Name',nameRef.current.value);
        console.log('Age',ageRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" ref={nameRef}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input id="age" type="number" ref={ageRef}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Uncontrolled;