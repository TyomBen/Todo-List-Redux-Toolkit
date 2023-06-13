import "./styles.css";
import { Button, Form, Input, Space, List, Divider } from "antd";
import "antd/dist/reset.css";
import {
  clearAllList,
  createList,
  clearCurrnetList,
  setInputValue,
} from "../features/slices/cartsSlices";
import { useDispatch, useSelector } from "react-redux";
const Card = () => {
  const { initialStateArray, initialStateValue } = useSelector(
    ({ todos }) => todos
  );
  const dispatch = useDispatch();
  const handleSetForm = (event) => {
    event.preventDefault();
    if (initialStateValue.trim() !== "") {
      dispatch(createList(initialStateValue));
      dispatch(setInputValue(""));
    }
  };

  return (
    <>
      <form onSubmit={handleSetForm}>
        <div className="container">
          <div id="newtask">
            <input
              type="text"
              value={initialStateValue}
              onChange={(event) => dispatch(setInputValue(event.target.value))}
              placeholder="Task to be done.."
            />
            <button id="push" type="submit">
              Add
            </button>
          </div>
          <div id="tasks">
            {initialStateArray.map((list, listindex) => {
              return (
                <div className="task" key={listindex}>
                  {" "}
                  {list}
                  <button onClick={() => dispatch(clearCurrnetList(listindex))}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <button onClick={() => dispatch(clearAllList())} className="button">
            Delete All
          </button>
        </div>
      </form>
    </>
  );
};

export default Card;
