 import { createRef, useState } from "react";
 
 const Form = (props) => {
    let uRef = createRef();
    const submitHandler = (e) => {
        e.preventDefault();
        // let uName = document.querySelector('#userName')
        console.log(uRef.current.value)
    }

    const [lastName, setLastName] = useState('');
    const changeHadler = (e) => {
        
        setLastName(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log(lastName);
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" id='userName' ref={uRef}/>
            <button type="submit">Click me</button>

        </form>

        <div>
            <input 
            type='text'
            id='lastName'
            value={lastName}
            onChange={changeHadler}
            />
            <button onClick={buttonHandler}>click me2</button>

        </div>
        </>
    )
}
export default Form;