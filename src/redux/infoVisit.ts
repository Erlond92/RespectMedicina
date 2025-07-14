import {createSlice} from "@reduxjs/toolkit";

type state = {
	name: string,
	phone: string,
	isClose: boolean,
}

const initialState: state = {
	name: "",
	phone: "",
	isClose: false
}

export const infoVisit = createSlice({
	name: 'InfoVisit',
	initialState,
	reducers: {
		getInfoVisit: (state, action: { payload: state }) => {
			state.isClose = action.payload.isClose;
			state.name = action.payload.name;
			state.phone = action.payload.phone;
		},

		onClose: (state) => {
			state.isClose = !state.isClose;
		}
	}
})

export const { getInfoVisit, onClose } = infoVisit.actions;
export default infoVisit;
