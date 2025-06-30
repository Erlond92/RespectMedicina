import {createSlice} from "@reduxjs/toolkit";

type State = {
    isError: boolean | null;
};

// Начальное состояние
const initialState: State = {
    isError: false,
};


export const errorAuthorization = createSlice({
    name: 'errorAuthorization',
    initialState,
    reducers: {
        toggle: (state) => { state.isError = !state.isError}
    }
})

export const { toggle } = errorAuthorization.actions;
export default errorAuthorization.reducer;
