import { useState } from "react";
import "./App.css";
import UseState from "./Useeffect/useState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState />
    </>
  );
}

export default App;
