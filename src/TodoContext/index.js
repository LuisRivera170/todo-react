import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
            { props.children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
