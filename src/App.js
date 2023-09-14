import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  const calculate = () => {
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsleft = grams - (burning * time)
    let alcohol = 0
    if (gender === 'male') {
      alcohol = gramsleft / (weight * 0.7)
    } else {
      alcohol = gramsleft / (weight * 0.6)
    }
    setResult(alcohol)
  }

  return (
    <div id="container">
      <h2>Calculating alcohol blood level</h2>
      <div id="weight">
        <label>Weight</label>
        <input type="number" min="1" max="500" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" id="bottles" min="0" value={bottles} onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
        <label>Time</label>
        <input type="number" id="time" min="0" value={time} onChange={e => setTime(e.target.value)}/>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(2)}</output>
      </div>
      <div>
        <button type="button" onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

export default App;