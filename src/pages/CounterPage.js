import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const CHANGE_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_ADD = "add_value_to_add";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count += 1;
      return;

    case CHANGE_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;

    case DECREMENT_COUNT:
      state.count -= 1;
      return;

    case ADD_VALUE_TO_ADD:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return;
  }
  //   if (action.type === INCREMENT_COUNT) {
  //     return {
  //       ...state,
  //       count: state.count + 1,
  //     };
  //   }
  //   if (action.type === CHANGE_VALUE_TO_ADD) {
  //     return {
  //       ...state,
  //       valueToAdd: action.payload,
  //     };
  //   }
  //   return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_ADD,
    });
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex-row flex">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
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
