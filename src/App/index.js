import React from 'react';

import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
      } catch(err) {
        setError(err);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedTodos);
  
      setItem(newItem);
    } catch(err) {
      setError(err);
    }
  };

  return {item, saveItem, loading, error};
}

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

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
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error} />
  );
}

export default App;
