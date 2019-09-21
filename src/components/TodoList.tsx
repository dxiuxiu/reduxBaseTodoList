import React from "react";
import Todo from "./Todo";
interface IProps {
  todos: any[],
  onTodoClick: (id: number | string) => void
}
const TodoList = ({ todos, onTodoClick }: IProps) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
  </ul>
);

export default TodoList;
