import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

function App() {
  const [name, setName] = useState('thong');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'hahah hahah ' },
    { id: 2, title: 'hahuhu huhu ' },

  ]);
  const handleClick = () => {
    if (!address) {
      alert("Empty value");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 101), title: 'meoe meoeo' }
    setTodos([...todos, newTodo])
    setAddress('');
  }

  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header>
        <p>Hello cac ban , I'm  {name}</p>
        <Todo todos={todos} />
        <input type="text" value={address} onChange={(e) => { changeAddress(e) }} />
        <button type="button" onClick={() => { handleClick() }}>Click Me</button>
      </header>

    </div>
  );
}

export default App;
