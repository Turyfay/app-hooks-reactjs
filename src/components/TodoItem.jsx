
export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {

    return (
        <li onDoubleClick={() => onToggleTodo(todo.id)} className='list-group-item d-flex justify-content-between'>
            <span className={todo.done ? 'align-self-center text-decoration-line-through': 'align-self-center'}>{todo.description}</span>
            <button onClick={() => onRemoveTodo(todo.id)} className='btn btn-danger'>Borrar</button>
        </li>
    )
}
