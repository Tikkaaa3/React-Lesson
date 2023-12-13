import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
    const [catFact, setCatFact] = useState('')
    const [name, setName] = useState('')
    const [predictedAge, setPredictedAge] = useState('')
    const fetchCat = () => {
        Axios.get('https://catfact.ninja/fact').then((res) => {
            setCatFact(res.data.fact)
        })
    }
    useEffect(() => {
        fetchCat()
    }, [])
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data.age)
        })
    }

  return (
    <div className="App">
      <button onClick={fetchCat} type='button'>Generate Cat Fact</button>
      <h1>{catFact}</h1>
      <br/>
      <input placeholder='kimi no na wa' onChange={(event) => {setName(event.target.value)}}/>
      <button type='button' onClick={fetchData}>Predict Age</button>
      <h1>{predictedAge}</h1>
    </div>
  );
}

export default App;
