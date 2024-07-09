import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { changeInput, insert, remove, toggle } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <input type="checkbox" onClick={() => dispatch(toggle())} />
      <span>{todo.text}</span>
      <button onClick={dispatch(remove)}>삭제</button>
    </div>
  );
};

const Todos = ({ input, todos }) => {
  const [text, setText] = useState(input);
  const dispatch = useAppDispatch();
  const [add, setAdd] = useState({ id: 1, text: "열심히하자", done: false });

  const onSubmit = (e) => {
    e.preventDefault();
    setAdd({ id: 8, text: text, done: false });
    dispatch(insert(add));
    console.log("제출");
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
          <TodoItem todo={todos} onToggle={toggle} onRemove={remove} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
