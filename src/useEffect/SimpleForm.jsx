import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'daenamorado',
        email: 'daenamorado@gmail.com'
    });


    const { username, email } = formState;

    const onInputChange = ({target})=>{
        const {name,value} = target;
       setFormState({
        ...formState,
        [name]: value
       })
    }

    useEffect(()=>{
        console.log("useEffect called");
    });

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" 
            className="form-control mt-2" 
            placeholder="User Name" 
            name="username"
            value={username} 
            onChange={onInputChange}
            />
            <input type="text" 
            className="form-control mt-2" 
            placeholder="prueba@gmail.com" 
            name="email"
            value={email}
            onChange={onInputChange}
            />
            

            {
                (username === 'daenamorado2') && <Message />
            }

        </>
    )
}
