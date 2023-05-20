import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setValueToAdd(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex-row flex">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          name=""
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          id=""
        />
        <Button>Add</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
