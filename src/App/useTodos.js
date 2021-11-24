import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    let searchedTodos = [];

    if (searchValue.length >= 1) {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    } else {
        searchedTodos = todos;
    }

    const totalTodos = searchedTodos.length;
    const completedTodos = searchedTodos.filter(todo => todo.completed).length;

   const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
        completed: false,
        text
    });

    saveTodos(newTodos);
   }  

    const completeTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        
        newTodos[todoIndex] = {
        ...newTodos[todoIndex],
        completed: true
        };

        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal
    }
}

export { useTodos };
