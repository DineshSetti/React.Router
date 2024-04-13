import React, { useState } from "react";

const Hooks = () => {
  const [state, setState] = useState("tanuku");

  function update() {
    const value = document.getElementById("input").value;
    setState(value);
  }

  return (
    <>
      <h1>{state}</h1>
      <input id="input" type="text" />
      <button onClick={update}>Update</button>
    </>
  );
};

export default Hooks;
