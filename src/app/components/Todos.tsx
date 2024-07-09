import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { changeInput, insert } from "../store/todoSlice";
import TodoItem from "./TodoItem";

const Todos = ({ input, todos }) => {
  const [text, setText] = useState(input);
  const [add, setAdd] = useState({ id: 5, text: "열심히하자", done: false });
  const dispatch = useAppDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setAdd({ id: 8, text: text, done: false });
    dispatch(insert(add));
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
        {todos.map((todos) => (
          <TodoItem todo={todos} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
