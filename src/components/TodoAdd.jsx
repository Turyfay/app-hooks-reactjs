import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {

    const {formState,description,onInputChange, onResetForm} = useForm({
        id: new Date().getTime(),
        description: '',
        done: false
    });

    const onSubmit = (e)=>{
        e.preventDefault();
        if (description.trim().length <= 1 ) return 
        onResetForm();
        onNewTodo(formState);
    }


    return (
        <form action="" onSubmit={onSubmit}>
            <input type="text"
                placeholder="¿Qué hay que hacer?"
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button type="submit"
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}
