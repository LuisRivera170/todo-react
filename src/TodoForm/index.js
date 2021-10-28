import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal} = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe tu nuevo TODO</label>
            <textarea
                className="TodoForm-textarea"
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo" 
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}    
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}