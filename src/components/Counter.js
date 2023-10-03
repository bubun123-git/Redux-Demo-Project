import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    // Implement your toggle counter logic here.
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.button}>
        <button onClick={incrementHandler}>INCREMENT BY 5</button>{" "}
        <button onClick={decrementHandler}>DECREMENT BY 5</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
