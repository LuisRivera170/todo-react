import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'; 

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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

    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = searchedTodos.findIndex(todo => todo.text === text);
    
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  }

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

export default App;
