import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };

  return (
    <>
      <h1>"That will be the thing"</h1>
      <p>How many times does Professor say the phrase?</p>
      <h4>Count: {count}</h4>
      <div className="card">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </>
  );
}

export default App;
