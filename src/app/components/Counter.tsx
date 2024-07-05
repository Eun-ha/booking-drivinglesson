import { decrease, increase } from "../store/counterSlice";
import { useAppDispatch } from "../store/store";

const Counter = ({ number }) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increase())}>+1</button>
        <button onClick={() => dispatch(decrease())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
