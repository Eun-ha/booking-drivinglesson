import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { changeInput, insert, remove, toggle } from "../store/todoSlice";

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

const Todos = ({ input, todos }) => {
  const [text, setText] = useState(input);
  const dispatch = useAppDispatch();
  const [add, setAdd] = useState({ id: 5, text: "열심히하자", done: false });

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
