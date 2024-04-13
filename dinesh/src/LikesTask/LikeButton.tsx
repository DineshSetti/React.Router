import { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  function name() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={name}> click here</button>
      <p>Count : {count}</p>
    </>
  );
}

export default LikeButton;
