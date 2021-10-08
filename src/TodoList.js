import React from 'react';
import './TodoList.css';

export function TodoList({children}) {
    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}
