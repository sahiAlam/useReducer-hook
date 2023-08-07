import { useReducer } from "react";
import "./styles.css";

const initialState = [];

const TODOS_ACTIONS = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delate_task"
};

const reducer = (state, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload
        }
      ];

    case TODOS_ACTIONS.DELETE_TASK:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h2>Count = {todos.length}</h2>
      Enter Tesk:
      <input
        type="text"
        onBlur={(e) =>
          dispatch({ type: TODOS_ACTIONS.ADD_TASK, payload: e.target.value })
        }
      />
      <hr />
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}{" "}
          <button
            onClick={() =>
              dispatch({ type: TODOS_ACTIONS.DELETE_TASK, payload: todo.id })
            }
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
}
