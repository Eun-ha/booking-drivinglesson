import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import { changeInput, insert } from "../store/todoSlice";
import TodoItem from "./TodoItem";

const Todos = ({ input, todos }) => {
  const [text, setText] = useState(input);
  const [add, setAdd] = useState({});
  const [id, setId] = useState(12);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setAdd({ id: id, text: text, done: false });
  }, [text]);

  const onSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    setAdd({ id: id, text: text, done: false });
    dispatch(insert(add));
    setText("");
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
    dispatch(changeInput(text));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeHandler} value={text} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todos, index) => (
          <TodoItem key={index} todo={todos} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
