import React from 'react';
import './App.css';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Yoga", done: false },
    { id: 2, text: "Playing Cricket", done: false },
    { id: 3, text: "Take shower", done: false }
  ]);

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}





