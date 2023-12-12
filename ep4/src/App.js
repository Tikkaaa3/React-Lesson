import './App.css';
import { useState } from 'react';

function App() {
    const [age, setAge] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const increaseAge = () => {
        setAge(age + 1)
    };
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };
    const [showText, setShowText] = useState(true);
    const [changeColor, setChangeColor] = useState('black');
  return (
    <div className="App">
        
      {age}
      <button type='button' onClick={increaseAge}>Increase Age</button>
      
      <input type='text' onChange={handleInputChange}/>
      {inputValue}

      <button type='button' onClick={() => {setChangeColor(changeColor === 'blue' ? 'red' : 'blue')}}>change color</button>
      <button type='button' onClick={() => {setShowText(!showText)}}>show/hide</button>
      {showText && <h1 style={{color: changeColor}}>HELLO I AM TIKKA</h1>}

    </div>
  );
}

export default App;
