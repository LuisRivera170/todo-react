import React from 'react';
import './CreateTodoButton.css';

export function CreateTodoButton({openModal, setOpenModal}) {
    const onClickButton = () => {
        console.log(openModal);
        setOpenModal(!openModal);
    }

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            +
        </button>
    )
}
