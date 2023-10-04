import { createStore } from 'redux';
import { CreateSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true }

CreateSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament(state) {
            state.counter++;
        },

        decreament(state) {
            state.counter--
        },

        increase(state, action) {
            state.counter = state.counter + action.value;
        },

        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    }
})



const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 2,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 2,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}
const store = createStore(counterReducer);

export default store;