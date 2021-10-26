import React from 'react';

import  { TodoContext } from '../TodoContext';

import './TodoCounter.css';

export function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO´s</h2>
    )
}

