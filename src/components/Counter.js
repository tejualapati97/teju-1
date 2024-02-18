import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement=()=>{
    setCount((prev)=> prev -1 )
  };
  const handleReset=()=>{
    setCount(0)
  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>&nbsp;
        <button onClick={handleDecrement}>Decrement</button> &nbsp;
        <button onClick={handleReset}>Reset</button> &nbsp;
        
      </div>
    </>
  );
};

export default Counter;
