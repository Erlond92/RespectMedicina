import {createSlice} from "@reduxjs/toolkit";

type Review = {
	name: string,
	phone: string,
	date_visit: string,
	rate: number,
	bonus: boolean,
		reviews: ('none' | 'pro' | 'yandex')[],
	sms: number,
	date_review: string,
}

const initialState: Review[] = [
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
	{
		name: 'Морару Валентин',
		phone: '+8(988)184-25-74',
		date_review: '14 февраля 2025',
		rate: 5,
		bonus: true,
		reviews: ['pro', "yandex"],
		sms: 1,
		date_visit: '14 февраля 2025'
	},
];

export const reviewList = createSlice({
	name: 'ReviewList',
	initialState,
	reducers: {
		addReview: (state, action: { payload: Review }) => {
			state.push(action.payload);
		},
	}
})

export const { addReview } = reviewList.actions;
export default reviewList;
