import {createSlice} from "@reduxjs/toolkit";

type Props = {
  toggleClinicMenu: boolean,
  togglePacientMenu: boolean,
}

const initialState: Props = {
  toggleClinicMenu: false,
  togglePacientMenu: false,
}

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    isClinic: (state) => {state.toggleClinicMenu = !state.toggleClinicMenu},
    isPacient: (state) => {state.togglePacientMenu = !state.togglePacientMenu},
  }
});

export const { isClinic, isPacient } = toggleSlice.actions;
export default toggleSlice.reducer;
