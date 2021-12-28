import React from "react";

export default function Counter() {
  let [counter, setCounter] = React.useState(5);
  //destructurng
  //React.useState => [value, function to update the value];
  const handleIncreament = (value) => {
    setCounter(counter + value);
  };
  const double = (value) => {
    setCounter(counter * 2);
  };

  return (
    <>
      <h1>Count</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncreament(1)}>Add </button>
      <button onClick={() => handleIncreament(-1)}>Reduce</button>
      <button onClick={() => double()}>Double</button>
    </>
  );
}
