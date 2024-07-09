import { useAppDispatch } from "../store/store";

const Counter = ({ number, type, type2 }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(type())}>+1</button>
        <button onClick={() => dispatch(type2())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
