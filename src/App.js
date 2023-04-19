import Accordion from "./components/Accordion";
import "./index.css";

function App() {
  const items = [
    {
      id: "w2",
      label: "Can I use React?",
      content: "Yes",
    },
    {
      id: "w3",
      label: "Can i use JS",
      content: "U do",
    },
    {
      id: "w36",
      label: "Can I use AI",
      content: "yeah",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
