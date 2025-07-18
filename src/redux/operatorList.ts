import {createSlice} from "@reduxjs/toolkit";


type Props = {
	id: number,
	name: string,
	email: string,
	password?: string,
}

const initialState: Props[] = [
	{
		id: 1,
		name: "Екатериненская",
		email: "Valentin.valentin@mail.ru",
		password: '1',
	},
	{
		id: 2,
		name: "Армед",
		email: "Valentin.valentin@mail.ru",
		password: '1',
	},
	{
		id: 3,
		name: "Инвитро",
		email: "Valentin.valentin@mail.ru",
		password: '1',
	}
];

export const OperatorList = createSlice({
	name: 'OperatorList',
	initialState,
	reducers: {
		addOperator: (state, action: {payload: Props}) => {
			state.push(action.payload);
		},
		changeOperator: (state, action: {payload: Props}) => {
			state = state.filter((element) => element.id !== action.payload.id);
			state.push(action.payload);
		},
		removeOperator: (state, action: {payload: Props}) => {
			state.filter((element) => element.id !== action.payload.id);
		}
	}
});

export const { addOperator, changeOperator, removeOperator } = OperatorList.actions;
export default OperatorList;