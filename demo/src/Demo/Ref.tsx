import React, { useRef } from "react";

function Ref() {
  const count = useRef(0);

  const value = () => {
    count.current++;
    console.log(count.current);
  };

  return (
    <div>
      <h1> Useref Function : 0</h1>
      <button onClick={value}>Increment</button>
    </div>
  );
}

export default Ref;
