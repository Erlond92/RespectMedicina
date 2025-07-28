import { createSlice } from "@reduxjs/toolkit";

type Clinic = {
	id: number,
	type: string,
  name: string,
  address: string,
};

const initialState: Clinic[] = [
	{
		id: 1,
		type: "поликлиника",
		name: "Армед",
		address: "г. Сочи, пер. Бамбуковая 44/1"
	},
	{
		id: 2,
		type: "поликлиника",
		name: "Екатерининская",
		address: "г. Сочи, пер. Рахманинова 44/1"
	},
	{
		id: 3,
		type: "стоматология",
		name: "Стоматология \"Улыбка\"",
		address: "г. Сочи, ул. Воровского"
	},
	{
		id: 4,
		type: "травмпункт",
		name: "Иван Левых",
		address: "г. Сочи, пер. Рахманинова 44/1"
	},
	{
		id: 5,
		type: "диагностический центр",
		name: "МедЭксперт",
		address: "г. Сочи, ул. Навагинская, 9"
	},
	{
		id: 6,
		type: "детская поликлиника",
		name: "Айболит",
		address: "г. Сочи, ул. Юных Ленинцев, 5"
	},
	{
		id: 7,
		type: "стоматология",
		name: "Дента Люкс",
		address: "г. Сочи, ул. Горького, 12"
	},
	{
		id: 8,
		type: "женская консультация",
		name: "Гинеко",
		address: "г. Сочи, ул. Чайковского, 3"
	},
		{
			id: 9,
			type: "травмпункт",
			name: "Скорая Ортопедия",
			address: "г. Сочи, пер. Морской, 7"
		},
		{
			id: 10,
			type: "поликлиника",
			name: "Здоровье+",
			address: "г. Сочи, ул. Роз, 15"
		},
		{
			id: 11,
			type: "стоматология",
			name: "Белая Улыбка",
			address: "г. Сочи, пр. Курортный, 22"
		},
		{
			id: 12,
			type: "частная клиника",
			name: "Медикал Престиж",
			address: "г. Сочи, ул. Депутатская, 18"
		},
		{
			id: 13,
			type: "офтальмология",
			name: "Око",
			address: "г. Сочи, ул. Виноградная, 30"
		},
		{
			id: 14,
			type: "кардиология",
			name: "КардиоПлюс",
			address: "г. Сочи, ул. Нагорная, 11"
		},
		{
			id: 15,
			type: "поликлиника",
			name: "Центральная больница",
			address: "г. Сочи, ул. Московская, 1"
		}
];

export const clinicList = createSlice({
  name: "ClinicList",
  initialState,
  reducers: {
    addClinic: (state, action: { payload: Clinic }) => {
      state.push(action.payload);
    },
  },
});

export const { addClinic } = clinicList.actions;
export default clinicList;
