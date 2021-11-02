import React from 'react';

export function TodoError({message}) {
    return (
        <div className="TodoError-container">
            <p className="TodoError-text">{message}</p>
        </div>
    );
}