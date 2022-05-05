// ! If we use redux toolkit, we don't need to use the createStore from redux. Instead we can use "configureStore", which it's like createStore but better because,
// ! but it makes merging multiple reducers into one store easier
// import { createStore } from 'redux';
// ! Redux Toolkit simplifies aspects of working with Redux
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter';
import authReducer from './auth';

// ! Remember, the store holds the complete ***STATE*** of your app. There should only be a single store in your app.
const store = configureStore({


    // ! ****A REDUCER IS A PURE FUNCTION THAT TAKES AN ACTION AND THE PREVIOUS STATE OF THE APPLICATION AND RETURNS THE NEW STATE.***
    reducer: {
        counter: counterReducer,  // ! Remember, slices are little pieces of the STATE (a "slice" of the state). ****THIS IS "STATE.COUNTER"****
        auth: authReducer // ! Remember, slices are little pieces of the STATE (a "slice" of the state). THIS IS ****"STATE.AUTH"****
    }
});

export default store;