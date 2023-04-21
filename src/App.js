import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelection = (option) => {
    setSelection(option);
    console.log(`selected:${selection}`);
  };
  return (
    <Dropdown value={selection} onChange={handleSelection} options={options} />
  );
}

export default App;
