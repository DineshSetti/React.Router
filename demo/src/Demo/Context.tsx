import React, { useContext } from "react";

const context = React.createContext();
function Demo() {
  const data = 500;
  return (
    <div>
      <context.Provider value={data}>
        <B />
      </context.Provider>
      ;
    </div>
  );
}
function A() {
  return "this is A component";
}
function B() {
  const x = useContext(context);
  return (
    <div>
      <h1>Number : {x}</h1>
    </div>
  );
}
export default Demo;
