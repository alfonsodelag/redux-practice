import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,

    // ! ****A REDUCER IS A PURE FUNCTION THAT TAKES AN ACTION AND THE PREVIOUS STATE OF THE APPLICATION AND RETURNS THE NEW STATE.***
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// ! In this case, these actions would be login and logout
export const authActions = authSlice.actions;

console.log("authSlice.actions", authSlice.actions);

export default authSlice.reducer;