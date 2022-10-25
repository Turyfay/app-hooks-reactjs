import { useReducer } from "react"
import { TodoAdd, TodoList } from "../components"
import { todoReducer } from "./todoReducer"


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Hacer algo mas',
        done: false
    },

]


export const TodoApp = () => {


    const [state, dispatch] = useReducer(todoReducer, initialState)

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
                  <TodoList todos={state} />
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
