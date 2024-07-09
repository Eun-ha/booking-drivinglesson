import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { remove, toggle } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const [id, setId] = useState(0);
  const dispatch = useAppDispatch();

  const removeHandler = (e) => {
    setId(todo.id);
    dispatch(remove(id));
  };

  const toggleHandler = (e) => {
    setId(todo.id);
    dispatch(toggle(id));
  };

  return (
    <div>
      <input type="checkbox" onClick={toggleHandler} />
      <span>{todo.text}</span>
      <button onClick={removeHandler}>삭제</button>
    </div>
  );
};

export default TodoItem;
