import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

// Challenge 1
/* 
function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
  
    const date = new Date("Auguest 14 2024");
    date.setDate(date.getDate() + count);
  
    return (
      <div className="card">
        <div>
  
          <button className="btnStyle" onClick={() => setStep(s => s - 1)}>
            -
          </button>
          <span>Step: {step}</span>
          <button className="btnStyle" onClick={() => setStep(s => s + 1)}>
            +
          </button>
        </div>
        <div>
          <button className="btnStyle" onClick={() => setCount(c => c - step)}>
            -
          </button>
          <span>Count: {count}</span>
          <button className="btnStyle" onClick={() => setCount(c => c + step)}>
            +
          </button>
        </div>
        <p className="dateStyle">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    );
*/

// Challenge 2 (upgrade to using range then updating input)
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("August 15 2024");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="card">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={e => setStep(+e.target.value)}
        />
        0<span>{step}</span>
      </div>
      <div>
        <button
          className="btnStyle"
          onClick={() => {
            setCount(c => c - step);
          }}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={e => setCount(+e.target.value)}
        />
        <button
          className="btnStyle"
          onClick={() => {
            setCount(c => c + step);
          }}
        >
          +
        </button>
      </div>
      <p className="dateStyle">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count === 1 ? "day" : "days"} from today is `
            : `${count} ${count === -1 ? "day" : "days"} ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
