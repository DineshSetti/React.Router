import { useState } from "react";
import Hooks from "./hooks.tsx/Hooks";
import "./App.css";
import Effect from "./hooks.tsx/Effect";
import Context from "./hooks.tsx/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hooks />
      <Effect />
      <Context />
    </>
  );
}

export default App;
