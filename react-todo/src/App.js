import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react'

function App() {
  const [todo, setToDo] = useState("");
  const [arrayOfTodos, setArrayOfTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Ciprian's TodoList</h1>
      </header>
      <Form todo={todo} setToDo={setToDo} arrayOfTodos={arrayOfTodos} setArrayOfTodos={setArrayOfTodos}/>
      <TodoList />
    </div>
  );
}

export default App;
