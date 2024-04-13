import React, { useState, useEffect } from "react";
import "./useState.css";
function UseState() {
  const [state, setState] = useState([]);
  const [Start, update] = useState(false);
  useEffect(() => {
    if (Start) {
      async function getData() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setState(json);
        console.log(json);
      }
      getData();
    }
  }, [Start]);

  return (
    <div>
      <button id="btn" onClick={() => update(true)}>
        click Here !
      </button>
      <ul>
        {state.map((k) => (
          <li key={k.id}>{k.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseState;
