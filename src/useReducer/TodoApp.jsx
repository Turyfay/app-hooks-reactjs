import { useEffect, useReducer } from "react"
import { TodoAdd, TodoList } from "../components"
import { todoReducer } from "./todoReducer"


const initialState = [];

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos') || []);
}


export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo)=>{
        dispatch({type: 'add', payload:todo});
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                  {/* Todo List */}
                  <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>

            </div>
        </>
    )
}
