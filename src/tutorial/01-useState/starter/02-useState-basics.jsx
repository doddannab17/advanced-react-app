import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>useState basics</h2>
      <div className="count">{count}</div>
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseStateBasics;
