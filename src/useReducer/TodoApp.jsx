
import { TodoAdd, TodoList } from "../components"
import { useTodo } from "../hooks"

export const TodoApp = () => {

    const { todos, handleNewTodo, handleRemoveTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => todo.done == false).length}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* Todo List */}
                    <TodoList todos={todos}
                        onRemoveTodo={handleRemoveTodo}
                        onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>

            </div>
        </>
    )
}
