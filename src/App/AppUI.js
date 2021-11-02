import React from "react";

import { TodoContext } from "../TodoContext";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export function AppUI() {
    const {error, loading, searchValue, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {error &&  <p>Desespérate, hubo un error...</p>}
                {loading &&  Array(4).fill(0).map((_, index) => (<TodoLoading key={index} />))}
                {(!loading && !searchedTodos.length) && (searchValue.length > 0 ? <TodoError message={'Busqueda sin resultados'} /> : <TodoError message={'Crea tu primer todo!!'} /> )}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>
            
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            

            <CreateTodoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
}
