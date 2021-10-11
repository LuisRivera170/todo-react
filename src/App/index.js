import React from 'react';

import { AppUI } from './AppUI';

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');
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

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);

    setTodos(newTodos);
  };

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
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo} />
  );
}

export default App;
