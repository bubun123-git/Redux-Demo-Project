// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        increase(state, action) {
            state.counter += action.payload;
        },

        toggle(state) {
            state.showCounter = !state.showCounter;

        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export default store;


// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 2,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 2,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }
