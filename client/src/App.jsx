import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count + 1)}>Decrment</button>
    </>
  );
}

export default App;
