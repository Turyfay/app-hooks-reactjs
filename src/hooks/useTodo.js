/* 
Exponer:
-Todos
- handleRemoveTodo
- handleToggleTodo
- handleNewTodo

*/

import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer,[], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    dispatch({ type: "add", payload: todo });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  return{
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
};
