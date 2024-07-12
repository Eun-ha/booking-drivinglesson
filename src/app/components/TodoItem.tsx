import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../store/store";
import { remove, toggle } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const [id, setId] = useState();
  const dispatch = useAppDispatch();

  console.log(todo);

  useEffect(() => {
    setId(todo.id);
  }, []);

  const removeHandler = () => {
    console.log(id);
    setId(todo.id);
    console.log(id);
    dispatch(remove(id));
  };

  const toggleHandler = () => {
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
