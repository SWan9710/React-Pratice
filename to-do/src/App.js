import './App.css';
import { useState } from 'react'
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
    const addItem = () => {
      setTodoList([...todoList, inputValue])
    }
  return (
    <div className="App">
      <input type="text" onChange={(event) => setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>
      <br />
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
