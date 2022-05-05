
import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };

// ! A slice is like a little piece of the State (like a slice of Pizza)
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,

    // ! ****A REDUCER IS A PURE FUNCTION THAT TAKES AN ACTION AND THE PREVIOUS STATE OF THE APPLICATION AND RETURNS THE NEW STATE.***
    reducers: {
        // ! Four methods because I have 4 different cases in my reducer.
        // ! Every method receives the latest state.
        // ! When using redux toolkit We CAN'T mutate the existent state because redux-toolkit contains a package called imgur, which will clone the existing state,
        // ! and overwrite the state which we are editing in an immutable way
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            // ! We access "payload" because that is the name of the property which will hold any extra data you might be dispatching to an action
            state.counter = state.counter + action.payload;
            console.log(action.payload)
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// ! In this case, these actions are increment, increase, decrement and toggleCounter
export const counterActions = counterSlice.actions;

console.log("counterSlice.actions", counterSlice.actions);

export default counterSlice.reducer;