import React from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>Count</h1>
      <h2>{counter}</h2>
      <button>Add </button>
      <button>Reduce</button>
    </div>
  );
}
