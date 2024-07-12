import React from 'react';
import './TodoList.css';

// Definisco un interfaccia per il type di props che stiamo passando
interface TodoListProps {
    todos: {id:number, text:string}[],
    onDeleteTodo: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = props => {


    return (
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>Elimina</button>
                </li>    
            ))}
        </ul>
    )
}

export default TodoList;