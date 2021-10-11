import React from 'react';
import './TodoCounter.css';

export function TodoCounter({totalTodos, completedTodos}) {
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO´s</h2>
    )
}

