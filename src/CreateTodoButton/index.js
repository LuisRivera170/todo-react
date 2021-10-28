import React from 'react';
import './CreateTodoButton.css';

export function CreateTodoButton({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            +
        </button>
    )
}
