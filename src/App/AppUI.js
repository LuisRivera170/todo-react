import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton'; 

export function AppUI({totalTodos, completedTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error}) {
    return (
        <React.Fragment>
            <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos} 
                />
            <TodoSearch
                searchValue={searchValue} 
                setSearchValue={setSearchValue} />

            <TodoList>
                {error &&  <p>Desespérate, hubo un error...</p>}
                {loading &&  <p>Estamos cargando, no desesperes..</p>}
                {(!loading && !searchedTodos.length) &&  <p>Crea tu primer todo!!</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}
