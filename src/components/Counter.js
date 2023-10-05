import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  console.log("counter:", counter);
  console.log("showCounter:", show);


  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.button}>
        <button onClick={incrementHandler}>INCREMENT BY 1</button>{" "}
        <button onClick={increaseHandler}>INCREMENT BY 5</button>{" "}
        <button onClick={decrementHandler}>DECREMENT BY 1</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// REDUX WITH CLASS BASED COMPONENTS
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     // Implement your toggle counter logic here.
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes.button}>
//           <button onClick={() => this.incrementHandler()}>INCREMENT BY 2</button>{" "}
//           <button onClick={() => this.decrementHandler()}>DECREMENT BY 2</button>
//         </div>
//         <br />
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter // Assuming your state has a 'counter' property
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
