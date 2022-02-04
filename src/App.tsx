import React, { useState } from 'react';
import './App.css';
import InputFields from './components/InputFields';
import TodoList from './components/TodoList';
import { Todo } from './models/models';

function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
    }

  }
  console.log(todo);
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFields todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
