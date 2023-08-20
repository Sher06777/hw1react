
import { useState } from 'react';
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => {
        if (state > 0) {
          setState(state - 5)
        }
      }}>-5</button>
      <button onClick={() => {
        if (state > 0) {
          setState(state - 1)
        }
      }}>-1</button>
      <button onClick={() => {
        setState(0)
      }}>0</button>
      <button onClick={() => {
        if (state < 15) {
          setState(state + 1)
        }
      }}>+1</button>
      <button onClick={() => {
        if (state <= 10) {
          setState(state + 5)
        }
      }}>+5</button>
    </div>
  );
}

export default App;
