import React from 'react';

// Definisco un interfaccia per il type di props che stiamo passando
interface TodoListProps {
    todos: {id:number, text:string}[]
}

const TodoList: React.FC<TodoListProps> = props => {


    return (
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>    
            ))}
        </ul>
    )
}

export default TodoList;