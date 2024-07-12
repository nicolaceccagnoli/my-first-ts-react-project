import React, { useState } from 'react';
// Importo la componente TodoList
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// FC = Functional Component
const App: React.FC = () => {

  /*
    Definisco un array di Todos attraverso lo useState che restituirà sempre un array
    con due elementi, il primo è l'ultima istantanea di stato (questo significa che 
    `todos` contiene il valore più recente dello stato "todos".), mentre il secondo paramentro
    è la funzione che aggiorna lo stato. A useState dobbiamo passare un Generic per riconoscere
    il tipo di dato che deve accettare 
  */ 
  const [todos, setTodos] = useState<Todo[]>([])

  // Definisco una funzione per aggiungere i todos alla lista
  const todoAddHandler = (text:string) => {
    /* 
      Passo la funzione che aggiornerà lo stato e imposterà l'array di todos in un nuovo array 
      a cui è stato passato il todoText. Inizialmente per creare l'id userò Math.random() anche 
      se non lo renderà unique. Utilizzerò la funzione prevTodos (che ottiene tutti i Todos precedenti)
      che restituirà il nuovo stato, altrimenti ogni volta verrebbero sovrascritti i todos
    */
    setTodos(prevTodos =>[...prevTodos, {id: Math.random(), text: text}])
  }

  // Definisco una funzione per elimianre i todo
  const todoDeleteHandler = (todoId:number) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      {/* Passo alla componente l'array di todos come props */}
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
