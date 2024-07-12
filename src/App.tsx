import React from 'react';
// Importo la componente TodoList
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

// FC = Functional Component
const App: React.FC = () => {

    // Definisco un array di Todos
    const todos = [
      {
          id: 1,
          text: 'Andare in palestra'
      }
    ]

  return (
    <div className="App">
      <NewTodo />
      {/* Passo alla componente l'array di todos come props */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
