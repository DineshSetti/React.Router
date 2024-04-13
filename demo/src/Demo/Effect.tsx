import React from "react";

import { useState, useEffect } from "react";
function Effect() {
  const [state, setstate] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setstate(state + 1);
    }, 100);
  }, []);
  return (
    <div>
      <h1> update value : {state}</h1>
    </div>
  );
}
export default Effect;
