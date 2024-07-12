// Insieme a React importo anche useRef
import React, { useRef } from 'react';
import './NewTodo.css';

// Definisco un type personalizzato per la props che sto passando
type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    /*
        Definisco un riferimento per l'input del form e gli diamo 
        come valore predefinito null, dato che quando il componente viene
        creato per la prima volta non punterà a nulla
    */
    const textInputRef = useRef<HTMLInputElement>(null)

    // Definisco una nuova funzione che verrà eseguita quando invio il form
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;

        props.onAddTodo(enteredText);
    }

    return (
        // Definisco un form per aggiungere un nuovo Todo alla lista
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Inserisci un nuovo Todo:</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Aggiungi Todo</button>
        </form>
    )
}


export default NewTodo;