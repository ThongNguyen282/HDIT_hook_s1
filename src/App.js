import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {
  const [name, setName] = useState('thong');
  const [address, setAddress] = useState('vn');
  const handleClick = () => {
    setName(address)

  }

  const changeAddress = (e) => {
    setAddress(e.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header>
        <p>Hello cac ban , I'm  {name}</p>
        <p> I'm from  {address}</p>
        <input type="text" value={address} onChange={(e) => { changeAddress(e) }} />
        <button type="button" onClick={() => { handleClick() }}>Click Me</button>
      </header>

    </div>
  );
}

export default App;
