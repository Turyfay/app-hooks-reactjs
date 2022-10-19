import  { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormCustomHook = () => {

  const {username,email,password, onInputChange,onResetForm} =  useForm({
    username: 'daenamorado',
    email:'',
    password: '',
  });


  return (
    <>
        <>
            <h1>Formulario with custom hook</h1>
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
            
            <input type="password" 
            className="form-control mt-2" 
            placeholder="Contraseña" 
            name="password"
            value={password}
            onChange={onInputChange}
            />
            

           <button onClick={onResetForm} className='btn btn-primary mt-2' >Borrar</button>

        </>
    </>
  )
}